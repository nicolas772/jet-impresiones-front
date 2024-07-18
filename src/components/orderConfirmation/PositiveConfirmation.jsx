import { useEffect, useState } from 'react'
import { CheckCircleIcon } from '@heroicons/react/24/outline'
import { toFormat } from '../../constants/format'
import OrderService from '../../services/orders.service'
import Loader from '../Loader'

const datosTarjeta = {
  tipo: 'Crédito',
  red: 'Visa',
  cardNumber: '**** 4660'
}

export default function PositiveConfirmation ({ orderID }) {
  const [order, setOrder] = useState({})
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    OrderService.getOrder(orderID).then(
      (response) => {
        setOrder(response.data)
        // AQUII!!!!! REVISAR CAMPO emailSended y enviar correo si es falso
        setLoading(false)
      },
      (error) => {
        console.log(error)
        setLoading(false)
      }
    )
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (loading) {
    return <Loader />
  }
  return (
    <section className='bg-white py-4 px-6 antialiased'>
      <div className='mx-auto max-w-screen-md'>
        <div className='flex flex-col items-center gap-3 pb-8 border-b'> {/* encabezado */}
          <CheckCircleIcon className='h-10 w-10 text-green-700' />
          <div className='flex flex-col items-center text-center gap-2'>
            <h1 className='text-2xl font-bold text-gray-900'>
              Hemos recibido tu pedido!
            </h1>
            <p className='text-md leading-6 text-gray-600'>
              La orden #{orderID} está siendo procesada para el envío.
            </p>
            <p className='text-md leading-6 text-gray-600'>
              Puedes <a href='#' title='' className='inline-flex items-center gap-2 font-medium text-primary-700 underline hover:no-underline dark:text-primary-500'>descargar aquí</a> tu orden.
            </p>
          </div>
        </div>
        <div className='flex flex-col sm:flex-row py-8 border-b'>
          <div className='flex-1'>
            <h1 className='text-sm font-bold text-gray-500 uppercase font-roboto'>
              Datos de envío
            </h1>
            <div className='pt-6 pr-3 text-sm text-gray-900 flex flex-col gap-3'>
              <p>{order.customerData.firstName + ' ' + order.customerData.lastName}</p>
              <p>{order.shippingAddress.streetAdress +
              ' #' + order.shippingAddress.numberAdress +
              (order.shippingAddress.apartment && (', ' + order.shippingAddress.apartment)) +
              ', ' + order.shippingAddress.comuna +
              ', ' + order.shippingAddress.region +
              ', ' + order.shippingAddress.country + '.'}
              </p>
              {order.shippingAddress.orderNotes && (
                <p><span className='font-semibold'>Nota: </span>{order.shippingAddress.orderNotes}</p>
              )}
            </div>
          </div>
          <div className='flex-1 pt-10 sm:pt-0'>
            <h1 className='text-sm font-bold text-gray-500 uppercase font-roboto'>
              Información de pago
            </h1>
            <div className='pt-6 pr-3 text-sm text-gray-900 flex flex-col gap-1'>
              <p>{order.payMethod}</p>
              <p>{datosTarjeta.tipo}</p>
              <p>{datosTarjeta.red}</p>
              <p>{datosTarjeta.cardNumber}</p>
            </div>
          </div>
        </div>
        <div className='py-8'>
          <h1 className='text-sm font-bold text-gray-500 uppercase font-roboto'>
            Detalle de Orden
          </h1>

          <div className='pt-6 space-y-4'>
            <div className='space-y-3'>
              {order.items.map((item) => (
                <dl key={`${item.id}-${item.selectedColor}`} className='flex items-center justify-between gap-4'>
                  <dt className='flex items-center text-sm font-normal text-gray-800 dark:text-gray-400'>
                    <img className='h-16 w-16 rounded-lg border' src={item.thumbnail.src} alt={item.thumbnail.alt} />
                    <div className='px-4'>
                      <h4>{item.title}</h4>
                      <div className='flex gap-2 text-xs text-gray-500'>
                        <span>Cantidad: {item.quantity}</span>
                        <span>Color: {item.selectedColor}</span>
                      </div>
                    </div>
                  </dt>
                  <dd className='text-sm font-medium text-gray-900 dark:text-white'>{toFormat(item.price * item.quantity)}</dd>
                </dl>
              ))}

            </div>
            <div className='space-y-2 border-t pt-4'>
              <dl className='flex items-center justify-between gap-4'>
                <dt className='text-sm font-normal text-gray-800 dark:text-gray-400'>Descuento Productos</dt>
                <dd className='text-sm font-medium text-green-600'>
                  -{order.totalAmount === order.totalAmountNoDcto ? '' : toFormat(order.totalAmountNoDcto - order.totalAmount)}
                </dd>
              </dl>
            </div>
            <div className='space-y-2 border-t pt-4'>
              <dl className='flex items-center justify-between gap-4'>
                <dt className='text-sm font-normal text-gray-800 dark:text-gray-400'>Envío <span className='text-gray-500'>(precio fijo)</span></dt>
                <dd className='text-sm font-medium text-gray-900 dark:text-white'>{toFormat(order.ShippingPrice)}</dd>
              </dl>
            </div>

            <dl className='flex items-center justify-between gap-4 border-t border-gray-200 pt-2 dark:border-gray-700'>
              <dt className='text-sm font-bold text-gray-900 dark:text-white'>Precio Total</dt>
              <dd className='text-base font-bold text-gray-900 dark:text-white'>{toFormat(order.totalAmount + order.ShippingPrice)}</dd>
            </dl>

          </div>
        </div>

      </div>
    </section>
  )
}
