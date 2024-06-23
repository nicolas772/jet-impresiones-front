import React, { useState } from 'react'

export function FeaturedImageGallery ({ data }) {
  const [active, setActive] = useState(data[0].src)
  const [altActive, setAltActive] = useState(data[0].alt)

  return (
    <div className='grid gap-4'>
      <div>
        <img
          className='h-auto w-full max-w-full rounded-lg object-cover object-center md:h-[480px]'
          src={active}
          alt={altActive}
        />
      </div>
      <div className='flex gap-4'>
        {data.map(({ src, alt }, index) => (
          <div key={index}>
            <img
              onClick={() => {
                setActive(src)
                setAltActive(alt)
              }}
              src={src}
              className={`h-20 max-w-full cursor-pointer rounded-lg object-cover object-center hover:opacity-50 ${
                active === src ? 'outline outline-4 outline-primary-400 hover:opacity-100' : ''
              }`}
              alt={alt}
            />
          </div>
        ))}
      </div>
    </div>
  )
}
