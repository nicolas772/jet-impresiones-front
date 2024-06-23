import ProductCart from './ProductCart'
import PopularProduct from './PopularProduct'
import OrderSumary from './OrderSumary'
import GiftCardBox from './GiftCardBox' // eslint-disable-line

const productsOnShoppingCart = [
  {
    name: 'Macetero, tamaño MEDIANO, variedad de colores.',
    price: '$15.000',
    qty: '4',
    image:
      {
        src: '../../products/foto1.png',
        alt: 'Two each of gray, white, and black shirts laying flat.'
      },
    color:
      {
        name: 'Rojo',
        class: 'bg-red-800',
        selectedClass: 'ring-gray-400'
      },
    description: // para product review
      'Maceteros impresos en 3D a base de fibra de plástico, ideal para decorar tu jardin de una manera tierna y efectiva.',
    shortDescription: // para carrito de compras
      'Maceteros impresos en 3D a base de fibra de plástico, ideal para decorar tu jardin de una manera tierna y efectiva.'
  },
  {
    name: 'Macetero, tamaño GRANDE, variedad de colores.',
    price: '$20.000',
    qty: '2',
    image:
      {
        src: '../../products/foto1.png',
        alt: 'Two each of gray, white, and black shirts laying flat.'
      },
    color:
      {
        name: 'Azul',
        class: 'bg-blue-900',
        selectedClass: 'ring-gray-900'
      },
    description: // para product review
      'Maceteros impresos en 3D a base de fibra de plástico, ideal para decorar tu jardin de una manera tierna y efectiva.',
    shortDescription: // para carrito de compras
      'Maceteros impresos en 3D a base de fibra de plástico, ideal para decorar tu jardin de una manera tierna y efectiva.'
  }
]

export default function ShopingCart () {
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
              productsOnShoppingCart.map((product) => (
                <ProductCart key={product.id} item={product} />
              ))
            }
            <div className='hidden xl:mt-8 xl:block'>
              <h3 className='text-2xl font-semibold text-gray-900 dark:text-white'>Lo más vendido</h3>
              <PopularProduct />
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
