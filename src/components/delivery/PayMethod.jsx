// import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

const PAY_METHODS = {
  KHIPU: 'KHIPU',
  WEBPAY: 'WEBPAY',
  TRANSFER: 'TRANSFER'
}

export default function PayMethod ({ disabled }) {
  const [payMethodSelected, setPayMethodSelected] = useState(PAY_METHODS.KHIPU)

  // const navigate = useNavigate()
  const toPay = () => {
    console.log('pagar')
  }

  const handlePayMethodChange = (event) => {
    setPayMethodSelected(event.target.value)
  }

  return (
    <div className='rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:p-6'>
      <p className='text-lg font-semibold text-gray-900 dark:text-white'>Método de pago</p>
      <fieldset className='mb-8 mt-2'>
        <div className='mt-6 space-y-6'>
          <div className='flex items-center gap-x-1'>
            <input
              id='push-everything'
              name='push-notifications'
              type='radio'
              value={PAY_METHODS.KHIPU}
              onChange={handlePayMethodChange}
              checked={payMethodSelected === PAY_METHODS.KHIPU}
              className='h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600'
            />
            <img src='https://s3.amazonaws.com/static.khipu.com/buttons/2024/200x75-color.svg' className='w-24 h-auto' />
          </div>
          <div className='flex items-center gap-x-3'>
            <input
              id='push-everything'
              name='push-notifications'
              type='radio'
              value={PAY_METHODS.WEBPAY}
              onChange={handlePayMethodChange}
              checked={payMethodSelected === PAY_METHODS.WEBPAY}
              className='h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600'
            />
            <img src='./WebpayPlus.png' className='w-28 h-auto' />
          </div>
          <div className='flex items-center gap-x-3'>
            <input
              id='push-nothing'
              name='push-notifications'
              type='radio'
              value={PAY_METHODS.TRANSFER}
              onChange={handlePayMethodChange}
              checked={payMethodSelected === PAY_METHODS.TRANSFER}
              className='h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600'
            />
            <label htmlFor='push-nothing' className='block text-md leading-6 text-gray-900'>
              Transferencia Bancaria Directa <p className='text-sm font-semibold'>(5% de descuento)</p>
            </label>
          </div>
        </div>
      </fieldset>
      <p className='text-sm text-gray-700'>
        Tus datos personales se utilizarán para procesar tu pedido, mejorar tu experiencia en esta web y otros propósitos descritos en nuestra política de privacidad.
      </p>
      <div className='my-8'>
        <div className='relative flex'>
          <div className='flex h-6 items-center gap-x-2 text-pretty'>
            <input
              id='comments'
              name='comments'
              type='checkbox'
              className='h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600'
            />
            <p className='text-xs leading-2 text-gray-500'>He leído y estoy de acuerdo con los términos y condiciones de la web.<span className='text-red-600'>*</span></p>
          </div>
        </div>
      </div>

      <div className='space-y-4'>
        <button
          onClick={toPay}
          className={`flex w-full items-center justify-center rounded-lg px-5 py-2.5 text-sm font-medium text-white 
          ${disabled ? 'bg-gray-400 cursor-not-allowed' : 'bg-primary-700 hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300'}`}
          disabled={disabled}
        >
          <p>Ir a Pagar</p>
        </button>

        <div className='flex items-center justify-center gap-2'>
          <span className='text-sm font-normal text-gray-500 dark:text-gray-400'> o puedes </span>
          <a href='/shoping-cart' title='' className='inline-flex items-center gap-2 text-sm font-medium text-primary-700 underline hover:no-underline dark:text-primary-500'>
            Volver al carrito
            <svg className='h-5 w-5' aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24'>
              <path stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M19 12H5m14 0-4 4m4-4-4-4' />
            </svg>
          </a>
        </div>
      </div>
    </div>
  )
}
