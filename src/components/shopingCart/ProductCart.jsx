/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import { useCart } from '../../hooks/useCart'
import { toFormat } from '../../constants/format'

export default function ProductCart ({ item }) {
  const { removeFromCart, addToCart } = useCart()
  const [quantity, setQuantity] = useState(item.quantity)
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

  const handleRemove = () => {
    removeFromCart(item)
  }

  useEffect(() => {
    const newItem = {
      ...item,
      quantity,
      set: true
    }
    addToCart(newItem)
  }, [quantity])

  return (
    <div className='pb-4'>
      <div className='rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 md:p-6'>
        <div className='space-y-4 md:flex md:items-center md:justify-between md:gap-6 md:space-y-0'>
          <a href='#' className='shrink-0 md:order-1'>
            <img className='h-20 w-20' src={item.thumbnail.src} alt={item.thumbnail.alt} />
          </a>

          <div className='flex items-center justify-between md:order-3 md:justify-end'>
            <div className='flex flex-col items-center'>
              <p className='py-1 font-semibold text-sm'>Cantidad</p>
              <div className='flex items-center'>
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
            <div className='text-end md:order-4 md:w-32'>
              <p className='text-base font-bold text-gray-900 dark:text-white'>{toFormat(item.price)}</p>
            </div>
          </div>

          <div className='w-full min-w-0 flex-1 space-y-4 md:order-2 md:max-w-md'>
            <a href={`products/${item.id}`} className='text-base font-semibold text-gray-900 hover:underline dark:text-white'>{item.title}</a>
            <p>{item.shortDescription}</p>
            <div className='flex items-center gap-4'>
              <button onClick={handleRemove} type='button' className='inline-flex items-center text-sm font-medium text-red-600 hover:underline dark:text-red-500'>
                <svg className='me-1.5 h-5 w-5' aria-hidden='true' xmlns='http://www.w3.org/2000/svg' width='24' height='24' fill='none' viewBox='0 0 24 24'>
                  <path stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M6 18 17.94 6M18 18 6.06 6' />
                </svg>
                Eliminar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
