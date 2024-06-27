export default function ShipmentForm () {
  return (
    <div>
      <div className='space-y-12 rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:p-6'>

        <div className='pb-3'>
          <h2 className='text-lg font-semibold leading-7 text-gray-900'>Datos de Envío</h2>
          <p className='mt-1 text-sm leading-6 text-gray-600'>Completa con tus datos para enviar los productos.</p>

          <div className='mt-8 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6'>
            <div className='sm:col-span-3'>
              <label htmlFor='first-name-1' className='block text-sm font-medium leading-6 text-gray-900'>
                Nombre
                <span className='text-red-600'>*</span>
              </label>
              <div className='mt-2'>
                <input
                  type='text'
                  name='first-name'
                  id='first-name-1'
                  autoComplete='given-name'
                  className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                />
              </div>
            </div>

            <div className='sm:col-span-3'>
              <label htmlFor='last-name-1' className='block text-sm font-medium leading-6 text-gray-900'>
                Apellidos
                <span className='text-red-600'>*</span>
              </label>
              <div className='mt-2'>
                <input
                  type='text'
                  name='last-name'
                  id='last-name-1'
                  autoComplete='family-name'
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
                  className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                />
              </div>
            </div>

            <div className='col-span-full'>
              <label htmlFor='street-address' className='block text-sm font-medium leading-6 text-gray-900'>
                Calle
                <span className='text-red-600'>*</span>
              </label>
              <div className='mt-2'>
                <input
                  type='text'
                  name='street-address'
                  id='street-address'
                  autoComplete='street-address'
                  placeholder='Ingresa el nombre de tu calle'
                  className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                />
              </div>
            </div>

            <div className='sm:col-span-3'>
              <label htmlFor='house-number' className='block text-sm font-medium leading-6 text-gray-900'>
                Número
                <span className='text-red-600'>*</span>
              </label>
              <div className='mt-2'>
                <input
                  type='text'
                  name='house-number'
                  id='house-number'
                  autoComplete='off'
                  placeholder='Ingresa el número de tu dirección'
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
                  className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6'
                >
                  <option>Santiago</option>
                  <option>Pedro Aguirre Cerda</option>
                  <option>Linares</option>
                </select>
              </div>
            </div>

            <div className='sm:col-span-2'>
              <label htmlFor='postal-code' className='block text-sm font-medium leading-6 text-gray-900'>
                ZIP / Postal code
                <span className='text-red-600'>*</span>
              </label>
              <div className='mt-2'>
                <input
                  type='text'
                  name='postal-code'
                  id='postal-code'
                  autoComplete='postal-code'
                  className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                />
              </div>
            </div>
            <div className='sm:col-span-6'>
              <label htmlFor='order-notes' className='block text-sm font-medium leading-6 text-gray-900'>
                Notas del pedido
                <span className='font-normal'>
                  &nbsp;(opcional)
                </span>
              </label>
              <div className='mt-2'>
                <textarea
                  rows={4}
                  name='order-notes'
                  id='order-notes'
                  autoComplete='off'
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
