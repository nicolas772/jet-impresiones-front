import React, { useState } from 'react'

export function FeaturedImageGallery ({ data }) {
  /* const data = [
    {
      imgelink: 'https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
    },
    {
      imgelink: 'https://images.unsplash.com/photo-1432462770865-65b70566d673?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'
    },
    {
      imgelink: 'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80'
    },
    {
      imgelink: 'https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80'
    },
    {
      imgelink: 'https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80'
    }
  ] */

  const [active, setActive] = useState(data[0].src)
  const [altActive, setAltActive] = useState(data[0].alt)

  const gridColsClass = `grid-cols-${data.length}`

  return (
    <div className='grid gap-4'>
      <div>
        <img
          className='h-auto w-full max-w-full rounded-lg object-cover object-center md:h-[480px]'
          src={active}
          alt={altActive}
        />
      </div>
      <div className={`grid ${gridColsClass} place-items-center gap-2`}>
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
