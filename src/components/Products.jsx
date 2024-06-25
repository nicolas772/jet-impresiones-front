import ProductItem from './ProductItem'
import { useCart } from '../hooks/useCart'

export default function Products ({ products }) {
  const { clearCart } = useCart()

  return (
    <div className='bg-white/95 m-2 rounded-lg'>
      <div className='mx-auto max-w-2xl px-4 py-10 sm:px-6 sm:py-4 lg:max-w-7xl lg:px-8'>
        <h2 className='text-2xl font-semibold tracking-tight text-gray-800'>Nuestros productos</h2>
        <div className='mt-6 grid gird-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8'>
          {
            products.map((product) => (
              <div key={product.id}>
                <ProductItem item={product} />
              </div>
            ))
          }
        </div>
      </div>
      <button onClick={clearCart} className='bg-gray-200'>
        Vaciar Carro
      </button>
    </div>
  )
}
