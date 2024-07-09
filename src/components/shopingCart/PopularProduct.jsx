import { useEffect, useState } from 'react'
import ProductService from '../../services/product.service'
import ProductItem from '../ProductItem'

export default function PopularProduct () {
  const [popularProducts, setPopularProducts] = useState([])

  useEffect(() => {
    ProductService.getAllProducts()
      .then((response) => {
        const actualPopularProducts = response.data.filter(product => product.popular)
        setPopularProducts(actualPopularProducts)
      },
      (error) => {
        const _content = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        setPopularProducts(_content)
      }
      )
  }, [])
  return (
    <div className='hidden xl:mt-8 xl:block'>
      <h3 className='text-lg font-bold tracking-tight text-gray-600 uppercase'>Lo más vendido</h3>
      <div className='mt-6 grid grid-cols-3 gap-4 sm:mt-8'>
        {
            popularProducts.map((product) => (
              <div key={product.id}>
                <ProductItem item={product} />
              </div>
            ))
          }
      </div>
    </div>
  )
}
