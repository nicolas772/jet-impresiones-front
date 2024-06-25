import { toFormat } from '../constants/format'

export default function ProductItem ({ item }) {
  const { thumbnail, title, shortDescription, price, id } = item
  return (
    <>
      <div className='group relative'>
        <div className='aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80'>
          <img
            src={thumbnail.src}
            alt={thumbnail.alt}
            className='h-full w-full object-cover object-center lg:h-full lg:w-full'
          />
        </div>
        <div className='mt-4 flex justify-between'>
          <div>
            <h3 className='text-sm font-semibold text-gray-700'>
              <a href={`products/${id}`}>
                <span aria-hidden='true' className='absolute inset-0' />
                {title}
              </a>
            </h3>
            <p className='mt-1 text-sm text-gray-500'>{shortDescription}</p>
          </div>
          <p className='text-sm font-medium text-gray-900'>{toFormat(price)}</p>
        </div>
      </div>
    </>
  )
}
