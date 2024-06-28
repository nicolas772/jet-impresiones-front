import React from 'react'
import { useFormCheckout } from '../../hooks/useFormCheckout'

export default function ShipmentForm () {
  const { formData, handleInputChange, errors } = useFormCheckout()
  console.log('errors: ', errors)
  return (
    <div>
      <div className='space-y-12 rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:p-6'>

        <div className='pb-3'>
          <h2 className='text-lg font-semibold leading-7 text-gray-900'>Datos de Envío</h2>
          <p className='mt-1 text-sm leading-6 text-gray-600'>Completa con tus datos para enviar los productos.</p>

          <div className='mt-8 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6'>
            <div className='sm:col-span-3'>
              <label htmlFor='firstName' className='block text-sm font-medium leading-6 text-gray-900'>
                Nombre
                <span className='text-red-600'>*</span>
              </label>
              <div className='mt-2'>
                <input
                  type='text'
                  name='firstName'
                  id='firstName'
                  autoComplete='given-name'
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                />
              </div>
            </div>

            <div className='sm:col-span-3'>
              <label htmlFor='lastName' className='block text-sm font-medium leading-6 text-gray-900'>
                Apellido
                <span className='text-red-600'>*</span>
              </label>
              <div className='mt-2'>
                <input
                  type='text'
                  name='lastName'
                  id='lastName'
                  autoComplete='family-name'
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                />
              </div>
            </div>
            <div className='sm:col-span-3'>
              <label htmlFor='email' className='block text-sm font-medium leading-6 text-gray-900'>
                Correo electrónico
                <span className='text-red-600'>*</span>
              </label>
              <div className='mt-2'>
                <input
                  type='text'
                  name='email'
                  id='email'
                  autoComplete='email'
                  placeholder='example@domain.com'
                  value={formData.email}
                  onChange={handleInputChange}
                  className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                />
              </div>
            </div>

            <div className='sm:col-span-3'>
              <label htmlFor='phone' className='block text-sm font-medium leading-6 text-gray-900'>
                Teléfono
                <span className='font-normal'>
                  &nbsp;(opcional)
                </span>
              </label>
              <div className='mt-2'>
                <input
                  type='number'
                  name='phone'
                  id='phone'
                  autoComplete='tel'
                  placeholder='912345678'
                  value={formData.phone}
                  onChange={handleInputChange}
                  className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                />
              </div>
            </div>

            <div className='col-span-full'>
              <label htmlFor='streetAdress' className='block text-sm font-medium leading-6 text-gray-900'>
                Calle
                <span className='text-red-600'>*</span>
              </label>
              <div className='mt-2'>
                <input
                  type='text'
                  name='streetAdress'
                  id='streetAdress'
                  autoComplete='street-address'
                  placeholder='Ingresa el nombre de tu calle'
                  value={formData.streetAdress}
                  onChange={handleInputChange}
                  className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                />
              </div>
            </div>

            <div className='sm:col-span-3'>
              <label htmlFor='numberAdress' className='block text-sm font-medium leading-6 text-gray-900'>
                Número
                <span className='text-red-600'>*</span>
              </label>
              <div className='mt-2'>
                <input
                  type='text'
                  name='numberAdress'
                  id='numberAdress'
                  autoComplete='off'
                  placeholder='Ingresa el número de tu dirección'
                  value={formData.numberAdress}
                  onChange={handleInputChange}
                  className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                />
              </div>
            </div>

            <div className='sm:col-span-3'>
              <label htmlFor='apartment' className='block text-sm font-medium leading-6 text-gray-900'>
                Dpto. / Casa / Oficina
                <span className='font-normal'>
                  &nbsp;(opcional)
                </span>
              </label>
              <div className='mt-2'>
                <input
                  type='text'
                  name='apartment'
                  id='apartment'
                  placeholder='Ej: Casa 502'
                  value={formData.apartment}
                  onChange={handleInputChange}
                  className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                />
              </div>
            </div>

            <div className='sm:col-span-2'>
              <label htmlFor='region' className='block text-sm font-medium leading-6 text-gray-900'>
                Región
                <span className='text-red-600'>*</span>
              </label>
              <div className='mt-2'>
                <select
                  id='region'
                  name='region'
                  autoComplete='region'
                  value={formData.region}
                  onChange={handleInputChange}
                  className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6'
                >
                  <option>Metropolitana</option>
                  <option>Maule</option>
                  <option>Bio Bio</option>
                </select>
              </div>
            </div>
            <div className='sm:col-span-2'>
              <label htmlFor='comuna' className='block text-sm font-medium leading-6 text-gray-900'>
                Comuna
                <span className='text-red-600'>*</span>
              </label>
              <div className='mt-2'>
                <select
                  id='comuna'
                  name='comuna'
                  autoComplete='off'
                  value={formData.comuna}
                  onChange={handleInputChange}
                  className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6'
                >
                  <option>Santiago</option>
                  <option>Pedro Aguirre Cerda</option>
                  <option>Linares</option>
                </select>
              </div>
            </div>

            <div className='sm:col-span-2'>
              <label htmlFor='postalCode' className='block text-sm font-medium leading-6 text-gray-900'>
                ZIP / Postal code
                <span className='text-red-600'>*</span>
              </label>
              <div className='mt-2'>
                <input
                  type='text'
                  name='postalCode'
                  id='postalCode'
                  autoComplete='postal-code'
                  value={formData.postalCode}
                  onChange={handleInputChange}
                  className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                />
              </div>
            </div>
            <div className='sm:col-span-6'>
              <label htmlFor='orderNotes' className='block text-sm font-medium leading-6 text-gray-900'>
                Notas del pedido
                <span className='font-normal'>
                  &nbsp;(opcional)
                </span>
              </label>
              <div className='mt-2'>
                <textarea
                  rows={4}
                  name='orderNotes'
                  id='orderNotes'
                  autoComplete='off'
                  value={formData.orderNotes}
                  onChange={handleInputChange}
                  className='block resize-none w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
