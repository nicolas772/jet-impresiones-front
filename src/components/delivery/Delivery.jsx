import OrderDetail from './OrderDetail'
import ShipmentDetails from './ShipmentDetails'

export default function Delivery () {
  return (
    <section className='bg-white py-4 px-6 antialiased dark:bg-gray-900 md:py-6'>
      <div className='mx-auto max-w-screen-xl px-4 2xl:px-0'>
        <h2 className='text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl'>
          Finalizar Compra
        </h2>
        <p className='py-2 text-gray-600'>
          Completa tus datos de envío para finalizar la compra
        </p>
      </div>
      <div className='mt-6 sm:mt-8 md:gap-6 lg:flex lg:items-start xl:gap-8'>
        <div className='mx-auto w-full flex-none lg:max-w-2xl xl:max-w-4xl'>
          <ShipmentDetails />
        </div>
        <div className='mx-auto mt-6 max-w-4xl flex-1 space-y-6 lg:mt-0 lg:w-full'>
          <OrderDetail />
        </div>
      </div>

    </section>
  )
}
