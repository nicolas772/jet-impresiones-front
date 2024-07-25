/* eslint-disable no-tabs */
import { useState } from 'react'
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
  Transition
} from '@headlessui/react'
import {
  Bars3Icon,
  XMarkIcon
} from '@heroicons/react/24/outline'
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid' // eslint-disable-line
import { Rocket01Icon, HotdogIcon, FlowerPotIcon, ShoppingCart01Icon } from 'hugeicons-react'
import { useNotification } from '../hooks/useNotification'

const products = [
  { name: 'Figuras de colección', description: 'Podrás alegrar a tu niño interior.', href: '/category/figuras-de-colección', icon: Rocket01Icon },
  { name: 'Maceteros', description: 'Embellece tu jardín y tus plantas.', href: '/category/maceteros', icon: FlowerPotIcon },
  { name: 'Porta Completos', description: 'Saborea tus Hot-Dogs de una forma entretenida!', href: '/category/porta-completos', icon: HotdogIcon }
]
const callsToAction = [
  /* { name: 'Ver nuestro proceso', href: '#', icon: PlayCircleIcon },
  { name: 'Contactanos', href: '#', icon: PhoneIcon } */
]

function classNames (...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar () {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { notification, clearNotification } = useNotification()
  const { notifications, showNotifications } = notification

  return (
    <header>
      <nav className='mx-auto z-30 flex max-w-7xl items-center justify-between p-6 lg:px-8' aria-label='Global'>
        <div className='flex lg:flex-1'>
          <a href='/' className='-m-1.5 p-1.5'>
            <span className='sr-only'>JET Impresiones 3D</span>
            <img className='h-16 w-auto' src='../../jetLogoLarge.webp' alt='logo principal de JET impresiones 3D' />
          </a>
        </div>
        <div className='relative flex lg:hidden'>
          <button
            type='button'
            className='-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700'
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className='sr-only'>Open main menu</span>
            <Bars3Icon className='h-6 w-6' aria-hidden='true' />
            {
              showNotifications && (
                <div className='absolute inline-flex items-center justify-center w-4 h-4 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -end-2 dark:border-gray-900' />
              )
            }
          </button>
        </div>
        <PopoverGroup className='hidden lg:flex lg:gap-x-12'>
          <a href='/' className='text-sm font-semibold leading-6 text-gray-900'>
            Inicio
          </a>
          <Popover className='relative'>
            <PopoverButton className='flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900'>
              Productos
              <ChevronDownIcon className='h-5 w-5 flex-none text-gray-400' aria-hidden='true' />
            </PopoverButton>

            <Transition
              enter='transition ease-out duration-200'
              enterFrom='opacity-0 translate-y-1'
              enterTo='opacity-100 translate-y-0'
              leave='transition ease-in duration-150'
              leaveFrom='opacity-100 translate-y-0'
              leaveTo='opacity-0 translate-y-1'
            >
              <PopoverPanel className='absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5'>
                <div className='p-4'>
                  {products.map((item) => (
                    <div
                      key={item.name}
                      className='group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50'
                    >
                      <div className='flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white'>
                        <item.icon className='h-6 w-6 text-gray-600 group-hover:text-indigo-600' aria-hidden='true' />
                      </div>
                      <div className='flex-auto'>
                        <a href={item.href} className='block font-semibold text-gray-900'>
                          {item.name}
                          <span className='absolute inset-0' />
                        </a>
                        <p className='mt-1 text-gray-600'>{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className='grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50'>
                  {callsToAction.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className='flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100'
                    >
                      <item.icon className='h-5 w-5 flex-none text-gray-400' aria-hidden='true' />
                      {item.name}
                    </a>
                  ))}
                </div>
              </PopoverPanel>
            </Transition>
          </Popover>

          <a href='/print-with-us' className='text-sm font-semibold leading-6 text-gray-900'>
            Imprime con Nosotros
          </a>
          <a href='/about-us' className='text-sm font-semibold leading-6 text-gray-900'>
            Quienes Somos
          </a>
        </PopoverGroup>
        <div className='hidden lg:flex lg:flex-1 lg:justify-end gap-2'>
          <a href='https://www.instagram.com/jet.impresiones3d/' target='_blank' className='p-2 rounded-lg hover:bg-gray-200'>
            <svg xmlns='http://www.w3.org/2000/svg' className='w-7' viewBox='0 0 48 48'>
              <radialGradient id='yOrnnhliCrdS2gy~4tD8ma_Xy10Jcu1L2Su_gr1' cx='19.38' cy='42.035' r='44.899' gradientUnits='userSpaceOnUse'><stop offset='0' stopColor='#fd5' /><stop offset='.328' stopColor='#ff543f' /><stop offset='.348' stopColor='#fc5245' /><stop offset='.504' stopColor='#e64771' /><stop offset='.643' stopColor='#d53e91' /><stop offset='.761' stopColor='#cc39a4' /><stop offset='.841' stopColor='#c837ab' /></radialGradient><path fill='url(#yOrnnhliCrdS2gy~4tD8ma_Xy10Jcu1L2Su_gr1)' d='M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z' /><radialGradient id='yOrnnhliCrdS2gy~4tD8mb_Xy10Jcu1L2Su_gr2' cx='11.786' cy='5.54' r='29.813' gradientTransform='matrix(1 0 0 .6663 0 1.849)' gradientUnits='userSpaceOnUse'><stop offset='0' stopColor='#4168c9' /><stop offset='.999' stopColor='#4168c9' stopOpacity='0' /></radialGradient><path fill='url(#yOrnnhliCrdS2gy~4tD8mb_Xy10Jcu1L2Su_gr2)' d='M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z' /><path fill='#fff' d='M24,31c-3.859,0-7-3.14-7-7s3.141-7,7-7s7,3.14,7,7S27.859,31,24,31z M24,19c-2.757,0-5,2.243-5,5	s2.243,5,5,5s5-2.243,5-5S26.757,19,24,19z' /><circle cx='31.5' cy='16.5' r='1.5' fill='#fff' /><path fill='#fff' d='M30,37H18c-3.859,0-7-3.14-7-7V18c0-3.86,3.141-7,7-7h12c3.859,0,7,3.14,7,7v12	C37,33.86,33.859,37,30,37z M18,13c-2.757,0-5,2.243-5,5v12c0,2.757,2.243,5,5,5h12c2.757,0,5-2.243,5-5V18c0-2.757-2.243-5-5-5H18z' />
            </svg>
          </a>
          <a href='https://www.tiktok.com/@jet.impresiones3d' target='_blank' className='p-2 rounded-lg hover:bg-gray-200'>
            <svg xmlns='http://www.w3.org/2000/svg' className='w-7' viewBox='0 0 50 50'>
              <path d='M41,4H9C6.243,4,4,6.243,4,9v32c0,2.757,2.243,5,5,5h32c2.757,0,5-2.243,5-5V9C46,6.243,43.757,4,41,4z M37.006,22.323 c-0.227,0.021-0.457,0.035-0.69,0.035c-2.623,0-4.928-1.349-6.269-3.388c0,5.349,0,11.435,0,11.537c0,4.709-3.818,8.527-8.527,8.527 s-8.527-3.818-8.527-8.527s3.818-8.527,8.527-8.527c0.178,0,0.352,0.016,0.527,0.027v4.202c-0.175-0.021-0.347-0.053-0.527-0.053 c-2.404,0-4.352,1.948-4.352,4.352s1.948,4.352,4.352,4.352s4.527-1.894,4.527-4.298c0-0.095,0.042-19.594,0.042-19.594h4.016 c0.378,3.591,3.277,6.425,6.901,6.685V22.323z' />
            </svg>

          </a>

          <a onClick={clearNotification} href='/shoping-cart' className='relative inline-flex p-2 text-sm font-medium text-center rounded-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-400'>
            <ShoppingCart01Icon />
            {
              showNotifications && (
                <div className='absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -end-2 dark:border-gray-900'>
                  {notifications}
                </div>
              )
            }
          </a>

        </div>
      </nav>
      <Dialog className='lg:hidden' open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className='fixed inset-0 z-10' />
        <DialogPanel className='fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-8 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10'>
          <div className='flex items-center justify-between'>
            <a href='/' className='-m-1.5 p-1.5'>
              <span className='sr-only'>Jet Impresiones 3D</span>
              <img
                className='h-16 w-auto'
                src='../../jetLogoLarge.png'
                alt='Logo de JET Impresiones 3D'
              />
            </a>
            <button
              type='button'
              className='-m-2.5 rounded-md p-2.5 text-gray-700'
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className='sr-only'>Close menu</span>
              <XMarkIcon className='h-6 w-6' aria-hidden='true' />
            </button>
          </div>
          <div className='mt-6 flow-root'>
            <div className='-my-6 divide-y divide-gray-500/10'>
              <div className='space-y-2 py-6'>
                <Disclosure as='div' className='-mx-3'>
                  {({ open }) => (
                    <>
                      <DisclosureButton className='flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50'>
                        Productos
                        <ChevronDownIcon
                          className={classNames(open ? 'rotate-180' : '', 'h-5 w-5 flex-none')}
                          aria-hidden='true'
                        />
                      </DisclosureButton>
                      <DisclosurePanel className='mt-2 space-y-2'>
                        {[...products].map((item) => (
                          <DisclosureButton
                            key={item.name}
                            as='a'
                            href={item.href}
                            className='block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50'
                          >
                            {item.name}
                          </DisclosureButton>
                        ))}
                      </DisclosurePanel>
                    </>
                  )}
                </Disclosure>
                <a
                  href='/print-with-us'
                  className='-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50'
                >
                  Imprime con Nosotros
                </a>
                <a
                  href='about-us'
                  className='-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50'
                >
                  Quienes Somos
                </a>
                <a
                  href='https://www.instagram.com/jet.impresiones3d/'
                  target='_blank'
                  className='-mx-3 flex gap-2 items-center rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50'
                >
                  <img src='/instagram.png' alt='logo de tik tok' className='w-6 ' />
                  Visitanos en Instagram
                </a>
                <a
                  href='https://www.tiktok.com/@jet.impresiones3d'
                  target='_blank'
                  className='-mx-3 flex gap-2 items-center rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50'
                >
                  <img src='/tik-tok.png' alt='logo de tik tok' className='w-6 ' />
                  Visitanos en Tik Tok
                </a>
                <div />
              </div>
              <div className='py-4'>
                <a onClick={clearNotification} href='/shoping-cart' className='flex items-center gap-2 -mx-3 rounded-lg px-3 py-2.5 text-base text-gray-900 hover:bg-gray-50'>
                  <span className={`relative inline-flex text-sm font-medium text-center ${showNotifications ? 'p-2' : 'p-0'} pl-0`}>
                    <ShoppingCart01Icon />
                    {
                      showNotifications && (
                        <div className='absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -end-2 dark:border-gray-900'>
                          {notifications}
                        </div>
                      )
                    }
                  </span>
                  <span className='font-semibold leading-7'>
                    Ver Carrito
                  </span>
                </a>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  )
}
