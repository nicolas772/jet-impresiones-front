import React, { useEffect, useState } from 'react'
import { useFormCheckout } from '../../hooks/useFormCheckout'
import { regiones } from '../../mocks/regionesChile.json'

const REGION_DEFAULT = '13' // REGION METROPOLITANA POR DEFECTO

export default function ShipmentForm () {
  const { formData, handleInputChange, handleBlur, errors } = useFormCheckout()
  const [actualRegion, setActualRegion] = useState(REGION_DEFAULT) // region metropolitana por defecto
  const [actualCommunes, setActualComunnes] = useState(
    regiones.find(region => region.number === REGION_DEFAULT).communes
  )

  console.log(formData.comuna)
  console.log(formData.region)

  const handleRegion = (event) => {
    setActualRegion(event.target.value)
    handleInputChange(event)
  }

  useEffect(() => {
    setActualComunnes(
      regiones.find(region => region.number === actualRegion).communes
    )
  }, [actualRegion])

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
                  onBlur={handleBlur}
                  className={
                    `block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset placeholder:text-gray-400 sm:text-sm sm:leading-6
                    ${errors.firstName ? 'ring-red-600 focus:ring-2 focus:ring-inset focus:ring-red-600 focus:border-0' : 'ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-primary-500'}`
                  }
                />
                {errors.firstName && <p className='text-red-600 text-xs pt-1 pl-1'>{errors.firstName}</p>}
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
                  onBlur={handleBlur}
                  className={
                    `block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset placeholder:text-gray-400 sm:text-sm sm:leading-6
                    ${errors.lastName ? 'ring-red-600 focus:ring-2 focus:ring-inset focus:ring-red-600 focus:border-0' : 'ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-primary-500'}`
                  }
                />
                {errors.lastName && <p className='text-red-600 text-xs pt-1 pl-1'>{errors.lastName}</p>}
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
                  onBlur={handleBlur}
                  className={
                    `block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset placeholder:text-gray-400 sm:text-sm sm:leading-6
                    ${errors.email ? 'ring-red-600 focus:ring-2 focus:ring-inset focus:ring-red-600 focus:border-0' : 'ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-primary-500'}`
                  }
                />
                {errors.email && <p className='text-red-600 text-xs pt-1 pl-1'>{errors.email}</p>}
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
                  onBlur={handleBlur}
                  className={
                    `block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset placeholder:text-gray-400 sm:text-sm sm:leading-6
                    ${errors.phone ? 'ring-red-600 focus:ring-2 focus:ring-inset focus:ring-red-600 focus:border-0' : 'ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-primary-500'}`
                  }
                />
                {errors.phone && <p className='text-red-600 text-xs pt-1 pl-1'>{errors.phone}</p>}
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
                  onBlur={handleBlur}
                  className={
                    `block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset placeholder:text-gray-400 sm:text-sm sm:leading-6
                    ${errors.streetAdress ? 'ring-red-600 focus:ring-2 focus:ring-inset focus:ring-red-600 focus:border-0' : 'ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-primary-500'}`
                  }
                />
                {errors.streetAdress && <p className='text-red-600 text-xs pt-1 pl-1'>{errors.streetAdress}</p>}
              </div>
            </div>

            <div className='sm:col-span-3'>
              <label htmlFor='numberAdress' className='block text-sm font-medium leading-6 text-gray-900'>
                Número
                <span className='text-red-600'>*</span>
              </label>
              <div className='mt-2'>
                <input
                  type='number'
                  name='numberAdress'
                  id='numberAdress'
                  autoComplete='off'
                  placeholder='Ingresa el número de tu dirección'
                  value={formData.numberAdress}
                  onChange={handleInputChange}
                  onBlur={handleBlur}
                  className={
                    `block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset placeholder:text-gray-400 sm:text-sm sm:leading-6
                    ${errors.numberAdress ? 'ring-red-600 focus:ring-2 focus:ring-inset focus:ring-red-600 focus:border-0' : 'ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-primary-500'}`
                  }
                />
                {errors.numberAdress && <p className='text-red-600 text-xs pt-1 pl-1'>{errors.numberAdress}</p>}
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
                  onBlur={handleBlur}
                  className={
                    `block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset placeholder:text-gray-400 sm:text-sm sm:leading-6
                    ${errors.apartment ? 'ring-red-600 focus:ring-2 focus:ring-inset focus:ring-red-600 focus:border-0' : 'ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-primary-500'}`
                  }
                />
                {errors.apartment && <p className='text-red-600 text-xs pt-1 pl-1'>{errors.apartment}</p>}
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
                  onChange={handleRegion}
                  onBlur={handleBlur}
                  className={
                    `block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset placeholder:text-gray-400 sm:text-sm sm:leading-6
                    ${errors.region ? 'ring-red-600 focus:ring-2 focus:ring-inset focus:ring-red-600 focus:border-0' : 'ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-primary-500'}`
                  }
                >
                  <option value='' default>Selecciona una región</option>
                  {
                    regiones.map((region) => (
                      <option key={region.number} value={region.number}>{region.name}</option>
                    ))
                  }

                </select>
                {errors.region && <p className='text-red-600 text-xs pt-1 pl-1'>{errors.region}</p>}
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
                  onBlur={handleBlur}
                  className={
                    `block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset placeholder:text-gray-400 sm:text-sm sm:leading-6
                    ${errors.comuna ? 'ring-red-600 focus:ring-2 focus:ring-inset focus:ring-red-600 focus:border-0' : 'ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-primary-500'}`
                  }
                >
                  <option value='' default>Selecciona una comuna</option>
                  {
                    actualCommunes.map(comuna => (
                      <option key={comuna} value={comuna}>{comuna}</option>
                    ))
                  }
                </select>
                {errors.comuna && <p className='text-red-600 text-xs pt-1 pl-1'>{errors.comuna}</p>}
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
                  onBlur={handleBlur}
                  className={
                    `block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset placeholder:text-gray-400 sm:text-sm sm:leading-6
                    ${errors.postalCode ? 'ring-red-600 focus:ring-2 focus:ring-inset focus:ring-red-600 focus:border-0' : 'ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-primary-500'}`
                  }
                />
                {errors.postalCode && <p className='text-red-600 text-xs pt-1 pl-1'>{errors.postalCode}</p>}
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
                  onBlur={handleBlur}
                  className={
                    `block resize-none w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset placeholder:text-gray-400 sm:text-sm sm:leading-6
                    ${errors.orderNotes ? 'ring-red-600 focus:ring-2 focus:ring-inset focus:ring-red-600 focus:border-0' : 'ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-primary-500'}`
                  }
                />
                {errors.orderNotes && <p className='text-red-600 text-xs pt-1 pl-1'>{errors.orderNotes}</p>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
