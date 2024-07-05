import { ComputerDesktopIcon } from '@heroicons/react/24/outline'

export default function AboutUs () {
  return (
    <div id='error-page' className='flex flex-col justify-center items-center h-[70vh] w-full'>
      <div className='flex items-center gap-2'>
        <ComputerDesktopIcon className='h-10 text-gray-900' />
        <h1 className='text-4xl text-bold py-7'>En construcción</h1>
      </div>
      <p className='pb-7'>Disculpa las molestias. Pronto podrás conocernos y saber más sobre nosotros. </p>
    </div>
  )
}
