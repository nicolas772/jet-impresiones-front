import Products from './Products'
import Hero from './Hero'
export default function Home ({ products }) {
  return (
    <div className='fade-in'>
      <Hero />
      <Products products={products} />
    </div>
  )
}
