import { useState } from 'react'
import { HeartAddIcon, ShoppingCartAdd01Icon } from 'hugeicons-react' //eslint-disable-line
import { Radio, RadioGroup } from '@headlessui/react'
import { FeaturedImageGallery } from './FeaturedImageGalery'
import { useCart } from '../hooks/useCart'
import { useParams } from 'react-router-dom'
import { useNotification } from '../hooks/useNotification'
import { colors as allColors } from '../constants/colors'

function classNames (...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function ProductReview ({ products }) {
  const { id } = useParams()
  const { addToCart } = useCart()
  const { addNotification } = useNotification()
  const product = products.find(p => p.id === parseInt(id))
  const colors = allColors.filter(({ name }) => product.colors.includes(name))

  const [selectedColor, setSelectedColor] = useState(colors[0])
  const [quantity, setQuantity] = useState(1)

  const handleDecrement = () => {
    setQuantity(prevQuantity => Math.max(prevQuantity - 1, 1)) // Evita que la cantidad sea menor que 1
  }

  const handleIncrement = () => {
    setQuantity(prevQuantity => prevQuantity + 1)
  }

  const handleChange = (event) => {
    const value = event.target.value
    const number = parseInt(value, 10)

    if (!isNaN(number) && number > 0) {
      setQuantity(number)
    } else if (value === '') {
      setQuantity('')
    }
  }

  const handleBlur = () => {
    if (quantity === '') {
      setQuantity(1)
    }
  }

  const handleAdd = () => {
    const newProduct = {
      ...product,
      quantity,
      set: false
    }
    addToCart(newProduct)
    addNotification()
  }

  if (!product) {
    return <div className='m-8'>Product not found</div>
  }

  return (
    <section className='py-8 bg-white md:py-8 dark:bg-gray-900 antialiased'>
      <div className='max-w-screen-xl px-4 mx-auto 2xl:px-0'>
        <div className='lg:grid lg:grid-cols-2 lg:gap-8 xl:gap-16'>
          <FeaturedImageGallery data={[product.thumbnail, ...product.images]} />
          <div className='mt-6 sm:mt-8 lg:mt-0'>
            <h1 className='text-xl font-semibold text-gray-900 sm:text-2xl dark:text-white'>
              {product.title}
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
                        product.rating > rating ? 'text-yellow-300' : 'text-gray-300',
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
                  ({product.rating})
                </p>
                <a href='#' className='text-sm font-medium leading-none text-gray-900 underline hover:no-underline dark:text-white'>
                  {product.totalOpinions} Opiniones
                </a>
              </div>
            </div>
            <div className='mt-8 flex'>
              <div>
                <h3 className='text-sm font-medium text-gray-900'>Color</h3>
                <fieldset aria-label='Choose a color' className='mt-4'>
                  <RadioGroup value={selectedColor} onChange={setSelectedColor} className='flex items-center space-x-3'>
                    {colors.map((color) => (
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
              <div className='ml-16'>
                <h3 className='text-sm font-medium text-gray-900'>Cantidad</h3>
                <div className='flex items-center mt-4'>
                  <button
                    type='button'
                    id='decrement-button'
                    className='inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700'
                    onClick={handleDecrement}
                  >
                    <svg className='h-2.5 w-2.5 text-gray-900 dark:text-white' aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 18 2'>
                      <path stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M1 1h16' />
                    </svg>
                  </button>
                  <input
                    type='text'
                    id='counter-input'
                    className='w-10 shrink-0 border-0 bg-transparent text-center text-sm font-medium text-gray-900 focus:outline-none focus:ring-0 dark:text-white'
                    value={quantity}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <button
                    type='button'
                    id='increment-button'
                    className='inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700'
                    onClick={handleIncrement}
                  >
                    <svg className='h-2.5 w-2.5 text-gray-900 dark:text-white' aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 18 18'>
                      <path stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M9 1v16M1 9h16' />
                    </svg>
                  </button>
                </div>
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
                onClick={handleAdd}
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
