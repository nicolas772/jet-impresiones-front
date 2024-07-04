import ProductItem from './ProductItem'

export default function Products ({ products }) {
  return (
    <div id='productos' className='bg-white/95 m-2 rounded-lg'>
      <div className='px-4 py-4 sm:px-6 sm:py-4 lg:px-8'>
        <h2 className='text-xl font-bold tracking-tight text-gray-600 uppercase'>Nuestros productos</h2>
        <div className='mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-10'>
          {
            products.map((product) => (
              <div key={product.id}>
                <ProductItem item={product} />
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}
