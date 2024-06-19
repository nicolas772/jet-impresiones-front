export default function Product (props) {
  const { productInfo } = props
  const { imageSrc, imageAlt, href, name, color, price } = productInfo
  return (
    <>
      <div className='group relative'>
        <div className='aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80'>
          <img
            src={imageSrc}
            alt={imageAlt}
            className='h-full w-full object-cover object-center lg:h-full lg:w-full'
          />
        </div>
        <div className='mt-4 flex justify-between'>
          <div>
            <h3 className='text-sm text-gray-700'>
              <a href={href}>
                <span aria-hidden='true' className='absolute inset-0' />
                {name}
              </a>
            </h3>
            <p className='mt-1 text-sm text-gray-500'>{color}</p>
          </div>
          <p className='text-sm font-medium text-gray-900'>{price}</p>
        </div>
      </div>
    </>
  )
}
