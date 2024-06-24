import ProductCart from './ProductCart'
import OrderSumary from './OrderSumary'
import GiftCardBox from './GiftCardBox' // eslint-disable-line
import ProductItem from '../ProductItem'
import { useCart } from '../../hooks/useCart'
import { products as popularProducts } from '../../mocks/popularProducts.json'
import { useNotification } from '../../hooks/useNotification'
import { useEffect } from 'react'

export default function ShopingCart () {
  const { cart } = useCart()
  const { clearNotification } = useNotification()

  useEffect(() => {
    clearNotification()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <section className='bg-white py-4 px-6 antialiased dark:bg-gray-900 md:py-6'>
      <div className='mx-auto max-w-screen-xl px-4 2xl:px-0'>
        <h2 className='text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl'>
          Tu Carrito
        </h2>
        <p className='py-2 text-gray-600'>
          Los artículos en tu carrito no están reservados. Termina el proceso de compra ahora para hacerte con ellos.
        </p>
        <div className='mt-6 sm:mt-8 md:gap-6 lg:flex lg:items-start xl:gap-8'>
          <div className='mx-auto w-full flex-none lg:max-w-2xl xl:max-w-4xl'>
            {
              cart.map((product) => (
                <ProductCart key={product.id} item={product} />
              ))
            }
            <div className='hidden xl:mt-8 xl:block'>
              <h3 className='text-2xl font-semibold text-gray-900 dark:text-white'>Lo más vendido</h3>
              <div className='mt-6 grid grid-cols-3 gap-4 sm:mt-8'>
                {
            popularProducts.map((product) => (
              <div key={product.id}>
                <ProductItem item={product} />
              </div>
            ))
          }
              </div>
            </div>
          </div>

          <div className='mx-auto mt-6 max-w-4xl flex-1 space-y-6 lg:mt-0 lg:w-full'>
            <OrderSumary />
            {/* <GiftCardBox /> */}
          </div>
        </div>
      </div>
    </section>
  )
}
