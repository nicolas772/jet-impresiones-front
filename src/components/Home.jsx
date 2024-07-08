import { useState, useEffect } from 'react'
import Products from './Products'
import Hero from './Hero'
import ProductService from '../services/product.service'
import Loader from './Loader'

export default function Home () {
  const [products, setProducts] = useState([])
  const [loading1, setLoading1] = useState(true)

  useEffect(() => {
    ProductService.getAllProducts()
      .then((response) => {
        setProducts(response.data)
        setLoading1(false)
      },
      (error) => {
        const _content = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        setProducts(_content)
      }
      )
  }, [])
  if (loading1) {
    return <Loader />
  }
  return (
    <div className='fade-in'>
      <Hero />
      <Products products={products} />
    </div>
  )
}
