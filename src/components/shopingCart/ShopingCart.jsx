import ProductCart from './ProductCart'
import OrderSumary from './OrderSumary'
import GiftCardBox from './GiftCardBox' // eslint-disable-line
import ProductItem from '../ProductItem'

const productsOnShoppingCart = [
  {
    id: 1,
    name: 'Macetero, tamaño MEDIANO, variedad de colores.',
    price: '$15.000',
    qty: 4,
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
    id: 2,
    name: 'Macetero, tamaño GRANDE, variedad de colores.',
    price: '$20.000',
    qty: 2,
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

const popularProducts = [
  {
    id: 1,
    name: 'Porta completo animales',
    href: 'products/1',
    imageSrc: './products/foto1.png',
    imageAlt: 'Porta completos de distintos animales',
    price: '$10.000',
    color: 'Varios colores'
  },
  {
    id: 2,
    name: 'Macetero mediano',
    href: '/products/2',
    imageSrc: './products/foto2.png',
    imageAlt: 'Maceteros de distintos colores',
    price: '$15.000',
    color: 'Varios colores'
  },
  {
    id: 3,
    name: 'Figura de acción personalizada',
    href: '/products/3',
    imageSrc: './products/foto3.png',
    imageAlt: 'Figura personalizada de accion',
    price: '$7.000',
    color: 'Blanco | Amarillo | Negro'
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
              <div className='mt-6 grid grid-cols-3 gap-4 sm:mt-8'>
                {
                popularProducts.map((product) => (
                  <ProductItem key={product.id} productInfo={product} />
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
