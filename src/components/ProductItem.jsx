import { toFormat } from '../constants/format'

export default function ProductItem ({ item }) {
  const { thumbnail, title, shortDescription, price, id, discountPercentage } = item
  const hasDiscount = discountPercentage > 0
  const finalPrice = price * (1 - discountPercentage / 100)

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
        <div className='mt-4 flex justify-between gap-1'>
          <div>
            <h3 className='text-sm font-semibold text-gray-700'>
              <a href={`products/${id}`}>
                <span aria-hidden='true' className='absolute inset-0' />
                {title}
              </a>
            </h3>
            <p className='mt-1 text-sm text-gray-500'>{shortDescription}</p>
          </div>
          <div className='flex flex-col items-end'>
            {
              hasDiscount
                ? (
                  <>
                    <p className='text-xs line-through font-medium text-gray-500'>{toFormat(price)}</p>
                    <p className='text-md font-medium text-red-700'>{toFormat(finalPrice)}</p>
                  </>
                  )
                : (
                  <p className='text-md font-medium text-gray-900'>{toFormat(price)}</p>
                  )
            }

          </div>
        </div>
      </div>
    </>
  )
}
