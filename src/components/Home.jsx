import { useState, useEffect } from 'react'
import Products from './Products'
import Hero from './Hero'
import ProductService from '../services/product.service'

export default function Home () {
  const [products, setProducts] = useState([])

  useEffect(() => {
    ProductService.getAllProducts()
      .then((response) => {
        setProducts(response.data)
      },
      (error) => {
        const _content = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        setProducts(_content)
      }
      )
  }, [])

  return (
    <div className='fade-in'>
      <Hero />
      <Products products={products} />
    </div>
  )
}
