import { useEffect, useState } from 'react'
import { CheckCircleIcon, ClipboardDocumentCheckIcon } from '@heroicons/react/24/outline'
import { toFormat } from '../../constants/format'
import { useParams } from 'react-router-dom'
import { ToastContainer, toast, Bounce } from 'react-toastify'
import OrderService from '../../services/orders.service'
import Loader from '../Loader'
import 'react-toastify/dist/ReactToastify.css'
import NegativeConfirmation from './NegativeConfirmation'

const datosTransferencia = {
  titular: 'JET Impresiones 3D SPA',
  banco: 'Banco Estado',
  tipoCuenta: 'Cuenta Vista',
  numeroCuenta: 19842753,
  rut: '19.842.753-5',
  correo: 'narayaurrutia@gmail.com',
  mensaje: 'Orden n° 123948',
  monto: 19840
}

export default function TransferConfirmation () {
  const { orderID } = useParams()
  const checkPay = orderID !== 'error'
  const [order, setOrder] = useState({})
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    window.scrollTo(0, 0)
    OrderService.getOrder(orderID).then(
      (response) => {
        setOrder(response.data)
        setLoading(false)
      },
      (error) => {
        console.log(error)
        setLoading(false)
      }
    )
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const copiarAlPortapapeles = () => {
    const datos = `
      Titular: ${datosTransferencia.titular}
      Banco: ${datosTransferencia.banco}
      Tipo de Cuenta: ${datosTransferencia.tipoCuenta}
      N° Cuenta: ${datosTransferencia.numeroCuenta}
      RUT: ${datosTransferencia.rut}
      Correo: ${datosTransferencia.correo}
      Mensaje: ${datosTransferencia.mensaje}
      Monto: ${datosTransferencia.monto}
    `
    navigator.clipboard.writeText(datos)
      .then(() => {
        toast.info('Datos copiados al portapapeles.', {
          position: 'top-right',
          autoClose: 4000,
          hideProgressBar: true,
          closeOnClick: true,
          draggable: true,
          theme: 'light',
          transition: Bounce
        })
      })
      .catch((err) => {
        console.log(err)
        toast.error('Error al copiar en portapapeles', {
          position: 'top-right',
          autoClose: 4000,
          hideProgressBar: true,
          closeOnClick: true,
          draggable: true,
          theme: 'light',
          transition: Bounce
        })
      })
  }
  if (loading) {
    return <Loader />
  }
  if (!checkPay) {
    return <NegativeConfirmation />
  }
  return (
    <section className='fade-in bg-white py-2 px-6 antialiased'>
      <div className='mx-auto max-w-screen-md'>
        <div className='flex flex-col items-center gap-3 pb-8 border-b'> {/* encabezado */}
          <CheckCircleIcon className='h-10 w-10 text-green-700' />
          <div className='flex flex-col items-center text-center gap-2'>
            <h1 className='text-2xl font-bold text-gray-900'>
              Hemos recibido tu pedido!
            </h1>
            <p className='text-md leading-6 text-gray-600'>
              La orden #{orderID} ha sido ingresada con éxito.
            </p>
            <div className='text-sm leading-6 text-gray-600'>
              Para finalizar la compra y preparar tu pedido, debes realizar la transferencia con los siguientes datos:
              <p className='font-semibold'>(plazo máximo de 48 horas)</p>
            </div>
          </div>
        </div>
        <div className='flex flex-col sm:flex-row py-8 border-b'>
          <div className='flex-1 '>
            <div
              onClick={copiarAlPortapapeles}
              className='flex items-center gap-1 cursor-pointer'
            >
              <ClipboardDocumentCheckIcon className='w-6' />
              <h1 className='text-sm font-bold text-gray-500 uppercase font-roboto'>
                Datos de transferencia
              </h1>
            </div>
            <div className='pt-6 pr-3 text-sm text-gray-900 flex flex-row gap-1'>
              <div className='flex-initial w-32'>
                <p>Titular:</p>
                <p>Banco:</p>
                <p>Tipo de Cuenta:</p>
                <p>N° Cuenta:</p>
                <p>RUT:</p>
                <p>Correo:</p>
                <p>Mensaje:</p>
                <p>Monto:</p>
              </div>
              <div className='flex-auto'>
                <p>{datosTransferencia.titular}</p>
                <p>{datosTransferencia.banco}</p>
                <p>{datosTransferencia.tipoCuenta}</p>
                <p>{datosTransferencia.numeroCuenta}</p>
                <p>{datosTransferencia.rut}</p>
                <p>{datosTransferencia.correo}</p>
                <p>{datosTransferencia.mensaje}</p>
                <p>{toFormat(datosTransferencia.monto)}</p>
              </div>
            </div>
          </div>
          <div className='flex-1 pt-10 sm:pt-0'>
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
              <dl className='flex items-center justify-between gap-4'>
                <dt className='text-sm font-normal text-gray-800 dark:text-gray-400'>Descuento Transferencia</dt>
                <dd className='text-sm font-medium text-green-600'>-{toFormat(order.transferDiscount)}</dd>
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
      <ToastContainer />
    </section>
  )
}
