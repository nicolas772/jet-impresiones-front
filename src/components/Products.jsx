import ProductItem from './ProductItem'

const products = [
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

export default function Products () {
  return (
    <div className='bg-white/95 m-2 rounded-lg'>
      <div className='mx-auto max-w-2xl px-4 py-10 sm:px-6 sm:py-4 lg:max-w-7xl lg:px-8'>
        <h2 className='text-2xl font-bold tracking-tight text-gray-900'>Productos disponibles</h2>
        <div className='mt-6 grid gird-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8'>
          {
            products.map((product) => (
              <div key={product.id}>
                <ProductItem productInfo={product} />
              </div>
            ))
          }
        </div>
      </div>

    </div>
  )
}
