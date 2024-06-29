import { XCircleIcon } from '@heroicons/react/24/outline'

export default function NegativeConfirmation () {
  return (
    <section className='bg-white py-4 px-6 antialiased'>
      <div className='mx-auto max-w-screen-md'>
        <div className='flex flex-col items-center gap-3 pb-8 border-b'> {/* encabezado */}
          <XCircleIcon className='h-10 w-10 text-red-600' />
          <div className='flex flex-col items-center text-center gap-2'>
            <h1 className='text-2xl font-bold text-gray-900'>
              Ha ocurrido un error!
            </h1>
            <p className='text-md leading-6 text-gray-600'>
              Hubo un problema con el procesamiento de tu pago y tu pedido no ha sido ingresado.
            </p>
            <p className='text-md leading-6 text-gray-600'>
              Puedes volver a <a href='/checkout-delivery' title='' className='inline-flex items-center gap-2 font-medium text-primary-700 underline hover:no-underline dark:text-primary-500'>finalizar la compra</a>.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
