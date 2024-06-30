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
            <img className='h-14 w-auto' src='../../jetLogoLarge.png' alt='logo principal de JET impresiones 3D' />
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
          <a href='https://www.tiktok.com/@jet.impresiones.3' target='_blank' className='p-2 rounded-lg hover:bg-gray-200'>
            <img src='/tik-tok.png' alt='logo de tik tok' className='w-6 ' />
          </a>
          <a href='https://www.instagram.com/jet.impresiones3d/' target='_blank' className='p-2 rounded-lg hover:bg-gray-200'>
            <img src='/instagram.png' alt='logo de instagram' className='w-6 ' />
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
                className='h-14 w-auto'
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
                  <img src='./instagram.png' alt='logo de tik tok' className='w-6 ' />
                  Visitanos en Instagram
                </a>
                <a
                  href='https://www.tiktok.com/@jet.impresiones.3'
                  target='_blank'
                  className='-mx-3 flex gap-2 items-center rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50'
                >
                  <img src='./tik-tok.png' alt='logo de tik tok' className='w-6 ' />
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
