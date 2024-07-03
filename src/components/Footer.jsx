export default function Footer () {
  const currentDate = new Date()
  const currentYear = currentDate.getFullYear()
  return (
    <div className='px-4 pt-44 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8'>
      <div className='grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4'>
        <div className='sm:col-span-2'>
          <a
            href='/'
            aria-label='Go home'
            title='Company'
            className='inline-flex items-center'
          >
            <img className='w-12' src='../../jetLogoLarge.png' alt='logo principal de JET impresiones 3D' />
            <span className='ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase'>
              JET Impresiones 3D
            </span>
          </a>
          <div className='mt-6 space-y-2 lg:max-w-sm'>
            <p className='text-base font-bold tracking-wide text-gray-900'>
              Sobre Nosotros
            </p>
            <p className='text-sm text-gray-800'>
              Ofrecemos variedad de productos impresos en 3D, además de soluciones personalizadas para clientes que deseen algo único.
            </p>
          </div>
        </div>
        <div className='space-y-2 text-sm'>
          <p className='text-base font-bold tracking-wide text-gray-900'>
            Contacto
          </p>
          <div className='flex'>
            <p className='mr-1 text-gray-800'>Teléfono:</p>
            <a
              href='tel:+569 7946 6021'
              aria-label='Our phone'
              title='Our phone'
              className='transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800'
            >
              +569 7946 6021
            </a>
          </div>
          <div className='flex'>
            <p className='mr-1 text-gray-800'>Email:</p>
            <a
              href='mailto:tiarevera11@gmail.com'
              aria-label='Our email'
              title='Our email'
              className='transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800'
            >
              tiarevera11@gmail.com
            </a>
          </div>
          {/* <div className='flex'>
            <p className='mr-1 text-gray-800'>Dirección:</p>
            <a
              href='https://www.google.com/maps'
              target='_blank'
              rel='noopener noreferrer'
              aria-label='Our address'
              title='Our address'
              className='transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800'
            >
              312 Lovely Street, NY
            </a>
          </div> */}
        </div>
        <div>
          <span className='text-base font-bold tracking-wide text-gray-900'>
            Social
          </span>
          <div className='flex items-center mt-1 space-x-3'>
            <a
              href='https://www.instagram.com/jet.impresiones3d/'
              target='_blank'
              className='text-gray-500 transition-colors duration-300 hover:text-gray-900'
            >
              <svg viewBox='0 0 30 30' fill='currentColor' className='h-6'>
                <circle cx='15' cy='15' r='4' />
                <path d='M19.999,3h-10C6.14,3,3,6.141,3,10.001v10C3,23.86,6.141,27,10.001,27h10C23.86,27,27,23.859,27,19.999v-10   C27,6.14,23.859,3,19.999,3z M15,21c-3.309,0-6-2.691-6-6s2.691-6,6-6s6,2.691,6,6S18.309,21,15,21z M22,9c-0.552,0-1-0.448-1-1   c0-0.552,0.448-1,1-1s1,0.448,1,1C23,8.552,22.552,9,22,9z' />
              </svg>
            </a>
            <a
              href='https://www.tiktok.com/@jet.impresiones.3'
              target='_blank'
              className='text-gray-500 transition-colors duration-300 hover:text-gray-900'
            >
              <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30' fill='currentColor' className='h-6 content-center'>
                <path d='M24,4H6C4.895,4,4,4.895,4,6v18c0,1.105,0.895,2,2,2h18c1.105,0,2-0.895,2-2V6C26,4.895,25.104,4,24,4z M22.689,13.474 c-0.13,0.012-0.261,0.02-0.393,0.02c-1.495,0-2.809-0.768-3.574-1.931c0,3.049,0,6.519,0,6.577c0,2.685-2.177,4.861-4.861,4.861 C11.177,23,9,20.823,9,18.139c0-2.685,2.177-4.861,4.861-4.861c0.102,0,0.201,0.009,0.3,0.015v2.396c-0.1-0.012-0.197-0.03-0.3-0.03 c-1.37,0-2.481,1.111-2.481,2.481s1.11,2.481,2.481,2.481c1.371,0,2.581-1.08,2.581-2.45c0-0.055,0.024-11.17,0.024-11.17h2.289 c0.215,2.047,1.868,3.663,3.934,3.811V13.474z' />
              </svg>
            </a>

          </div>
          <p className='mt-4 text-sm text-gray-500'>
            Puedes seguirnos en nuestras redes sociales, y enterarte de noticias y nuevos productos a la venta.
          </p>
        </div>
      </div>
      <div className='flex flex-col-reverse justify-between pt-5 pb-10 border-t lg:flex-row'>
        <p className='text-sm text-gray-600'>
          © Copyright {currentYear} Jet Impresiones 3D. Todos los derechos reservados.
        </p>
        <ul className='flex flex-col mb-3 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row'>
          <li>
            <a
              href='/'
              className='text-sm text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400'
            >
              Política de Privacidad
            </a>
          </li>
          <li>
            <a
              href='/'
              className='text-sm text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400'
            >
              Términos y Condiciones
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}
