import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useCart } from '../../hooks/useCart'
import { toFormat } from '../../constants/format'

export default function OrderSumary () {
  const { cart } = useCart()
  const [normalPrice, setNormalPrice] = useState(0)
  const [discount, setDiscount] = useState(0)

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

  const navigate = useNavigate()
  const toDeliveryForm = () => {
    // primero se debe verificar que carro no esté vacío
    navigate('/checkout-delivery')
  }

  return (
    <div className='space-y-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:p-6'>
      <p className='text-xl font-semibold text-gray-900 dark:text-white'>Resumen de tu compra</p>

      <div className='space-y-4'>
        <div className='space-y-2'>
          <dl className='flex items-center justify-between gap-4'>
            <dt className='text-base font-normal text-gray-500 dark:text-gray-400'>Precio Normal</dt>
            <dd className='text-base font-medium text-gray-900 dark:text-white'>{toFormat(normalPrice)}</dd>
          </dl>

          <dl className='flex items-center justify-between gap-4'>
            <dt className='text-base font-normal text-gray-500 dark:text-gray-400'>Descuentos</dt>
            <dd className='text-base font-medium text-green-600'>-{discount === 0 ? '' : toFormat(discount)}</dd>
          </dl>
        </div>

        <dl className='flex items-center justify-between gap-4 border-t border-gray-200 pt-2 dark:border-gray-700'>
          <dt className='text-base font-bold text-gray-900 dark:text-white'>Precio Total</dt>
          <dd className='text-base font-bold text-gray-900 dark:text-white'>
            {toFormat(normalPrice - discount)} <span className='text-sm font-normal'>+ envío</span>
          </dd>
        </dl>
      </div>

      <button onClick={toDeliveryForm} className='flex w-full items-center justify-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800'>
        <p>Ir a Pagar</p>
      </button>

      <div className='flex items-center justify-center gap-2'>
        <span className='text-sm font-normal text-gray-500 dark:text-gray-400'> o puedes </span>
        <a href='/' title='' className='inline-flex items-center gap-2 text-sm font-medium text-primary-700 underline hover:no-underline dark:text-primary-500'>
          Seguir comprando
          <svg className='h-5 w-5' aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24'>
            <path stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M19 12H5m14 0-4 4m4-4-4-4' />
          </svg>
        </a>
      </div>
    </div>
  )
}
