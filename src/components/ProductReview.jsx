import { useState } from 'react'
import { HeartAddIcon, ShoppingCartAdd01Icon } from 'hugeicons-react' //eslint-disable-line
import { Radio, RadioGroup } from '@headlessui/react'
import { FeaturedImageGallery } from './FeaturedImageGalery'

const product = {
  name: 'Macetero, tamaño MEDIANO, variedad de colores.',
  price: '$15.000',
  images: [
    {
      src: '../../products/foto1.png',
      alt: 'Two each of gray, white, and black shirts laying flat.'
    },
    {
      src: '../../products/foto2.png',
      alt: 'Model wearing plain black basic tee.'
    },
    {
      src: '../../products/foto3.png',
      alt: 'Model wearing plain gray basic tee.'
    }
  ],
  colors: [
    { name: 'Rojo', class: 'bg-red-800', selectedClass: 'ring-gray-400' },
    { name: 'Blanco', class: 'bg-gray-100', selectedClass: 'ring-gray-400' },
    { name: 'Azul', class: 'bg-blue-900', selectedClass: 'ring-gray-900' }
  ],
  description:
    'Maceteros impresos en 3D a base de fibra de plástico, ideal para decorar tu jardin de una manera tierna y efectiva.',
  observations: [
    'Medida: 21,7 x 13,8 cm.',
    'Sujeto a disponibilidad.',
    'Despacho entre 3 a 5 días.',
    'El modelo 3D no se vende.'
  ]
}
const reviews = { href: '#', average: 4, totalCount: 117 }
function classNames (...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function ProductReview () {
  const [selectedColor, setSelectedColor] = useState(product.colors[0])
  return (
    <section className='py-8 bg-white md:py-12 dark:bg-gray-900 antialiased'>
      <div className='max-w-screen-xl px-4 mx-auto 2xl:px-0'>
        <div className='lg:grid lg:grid-cols-2 lg:gap-8 xl:gap-16'>
          <FeaturedImageGallery data={product.images} />
          <div className='mt-6 sm:mt-8 lg:mt-0'>
            <h1 className='text-xl font-semibold text-gray-900 sm:text-2xl dark:text-white'>
              {product.name}
            </h1>
            <div className='mt-4 sm:items-center sm:gap-4 sm:flex'>
              <p className='text-2xl font-extrabold text-gray-900 sm:text-3xl dark:text-white'>
                {product.price}
              </p>
              <div className='flex items-center gap-2 mt-2 sm:mt-0'>
                <div className='flex items-center gap-1'>
                  {[0, 1, 2, 3, 4].map((rating) => (
                    <svg
                      key={rating}
                      className={classNames(
                        reviews.average > rating ? 'text-yellow-300' : 'text-gray-300',
                        'h-5 w-5 flex-shrink-0'
                      )}
                      aria-hidden='true'
                      xmlns='http://www.w3.org/2000/svg'
                      width='24'
                      height='24'
                      fill='currentColor'
                      viewBox='0 0 24 24'
                    >
                      <path
                        d='M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z'
                      />
                    </svg>
                  ))}
                </div>
                <p className='text-sm font-medium leading-none text-gray-500 dark:text-gray-400'>
                  ({reviews.average})
                </p>
                <a href='#' className='text-sm font-medium leading-none text-gray-900 underline hover:no-underline dark:text-white'>
                  {reviews.totalCount} Reviews
                </a>
              </div>
            </div>
            <div className='mt-8'>
              <div>
                <h3 className='text-sm font-medium text-gray-900'>Color</h3>
                <fieldset aria-label='Choose a color' className='mt-4'>
                  <RadioGroup value={selectedColor} onChange={setSelectedColor} className='flex items-center space-x-3'>
                    {product.colors.map((color) => (
                      <Radio
                        key={color.name}
                        value={color}
                        aria-label={color.name}
                        className={({ focus, checked }) =>
                          classNames(
                            color.selectedClass,
                            focus && checked ? 'ring ring-offset-1' : '',
                            !focus && checked ? 'ring-2' : '',
                            'relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none'
                          )}
                      >
                        <span
                          aria-hidden='true'
                          className={classNames(
                            color.class,
                            'h-8 w-8 rounded-full border border-black border-opacity-10'
                          )}
                        />
                      </Radio>
                    ))}
                  </RadioGroup>
                </fieldset>
              </div>
            </div>
            <div className='mt-6 sm:gap-4 sm:items-center sm:flex sm:mt-8'>
              {/* <button
                onClick={() => console.log('añadir a favoritos')}
                className='flex items-center justify-center py-2.5 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700'
              >
                <HeartAddIcon className='w-5 h-5 -ms-2 me-2' />
                Añadir a Favoritos
              </button> */}
              <button
                onClick={() => console.log('añadir a carro')}
                className='text-white mt-4 sm:mt-0 bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800 flex items-center justify-center'
              >
                <ShoppingCartAdd01Icon className='w-5 h-5 -ms-2 me-2' />
                Añadir a Carrito
              </button>
            </div>
            <hr className='my-6 md:my-8 border-gray-200 dark:border-gray-800' />
            <p className='mb-6 text-gray-500 dark:text-gray-400'>
              {product.description}
            </p>
            <div className='mt-10'>
              <h3 className='text-sm font-medium text-gray-900'>Observaciones</h3>

              <div className='mt-4'>
                <ul role='list' className='list-disc space-y-2 pl-4 text-sm'>
                  {product.observations.map((observation) => (
                    <li key={observation} className='text-gray-400'>
                      <span className='text-gray-600'>{observation}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}
