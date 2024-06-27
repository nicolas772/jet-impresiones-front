import { useEffect, useState } from 'react'
import { useCart } from '../../hooks/useCart'
import { toFormat } from '../../constants/format'

export default function OrderDetail () {
  const { cart } = useCart()
  const [normalPrice, setNormalPrice] = useState(0)
  const [discount, setDiscount] = useState(0)

  console.log(cart)

  useEffect(() => {
    const total = cart.reduce(
      (acc, curr) => {
        return (acc + (curr.price * curr.quantity))
      }, 0)

    const desc = cart.reduce(
      (acc, curr) => {
        return (acc + (curr.price * curr.quantity * curr.discountPercentage / 100))
      }, 0)
    setNormalPrice(total)
    setDiscount(desc)
  }, [cart])

  return (
    <div className='space-y-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:p-6'>
      <p className='text-lg font-semibold text-gray-900 dark:text-white'>Detalle de tu compra</p>

      <div className='space-y-4'>
        <div className='space-y-3'>
          {
            cart.map((item) => (
              <dl key={`${item.id}-${item.selectedColor}`} className='flex items-start justify-between gap-4'>
                <dt className='text-sm font-normal text-gray-800 dark:text-gray-400'>
                  <h4>{item.title}</h4>
                  <div className='flex gap-2 text-xs text-gray-500'>
                    <span>Cantidad: {item.quantity}</span>
                    <span>Color: {item.selectedColor.name}</span>
                  </div>
                </dt>
                <dd className='text-sm font-medium text-gray-900 dark:text-white'>{toFormat(item.price * item.quantity)}</dd>
              </dl>
            ))
          }
        </div>

        <div className='space-y-2 border-t pt-4'>
          <dl className='flex items-center justify-between gap-4'>
            <dt className='text-sm font-normal text-gray-800 dark:text-gray-400'>Descuento Productos</dt>
            <dd className='text-sm font-medium text-green-600'>-{discount === 0 ? '' : toFormat(discount)}</dd>
          </dl>
          <dl className='flex items-center justify-between gap-4'>
            <dt className='text-sm font-normal text-gray-800 dark:text-gray-400'>Descuento Transferencia</dt>
            <dd className='text-sm font-medium text-green-600'>-{discount === 0 ? '' : toFormat(discount)}</dd>
          </dl>
        </div>

        <dl className='flex items-center justify-between gap-4 border-t border-gray-200 pt-2 dark:border-gray-700'>
          <dt className='text-sm font-bold text-gray-900 dark:text-white'>Precio Total</dt>
          <dd className='text-base font-bold text-gray-900 dark:text-white'>
            {toFormat(normalPrice - discount)} <span className='text-sm font-normal'>+ envío</span>
          </dd>
        </dl>
      </div>
    </div>
  )
}
