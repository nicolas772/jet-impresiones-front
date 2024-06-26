import { useEffect } from 'react'
import OrderDetail from './OrderDetail'
import ShipmentForm from './ShipmentForm'
import PayMethod from './PayMethod'
import { FormCheckoutProvider } from '../../context/form'

export default function Delivery () {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <FormCheckoutProvider>
      <section className='bg-white py-4 px-6 antialiased dark:bg-gray-900 md:py-6'>
        <div className='mx-auto max-w-screen-xl px-4'>
          <h2 className='text-xl font-bold tracking-tight text-gray-600 uppercase'>
            Finalizar Compra
          </h2>
        </div>
        <div className='mt-6 px-4 mx-auto max-w-screen-2xl sm:mt-8 md:gap-6 lg:flex lg:items-start lg:justify-center xl:gap-8'>
          <div className='mx-auto w-full flex-none lg:max-w-2xl xl:max-w-4xl'>
            <ShipmentForm />
          </div>
          <div className='mx-auto mt-6 max-w-4xl flex-1 space-y-6 lg:mt-0 lg:w-full'>

            <OrderDetail />
            <PayMethod />

          </div>
        </div>
      </section>
    </FormCheckoutProvider>
  )
}
