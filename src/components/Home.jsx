import Products from './Products'
import Hero from './Hero'
export default function Home ({ products }) {
  return (
    <>
      <Hero />
      <Products products={products} />
    </>
  )
}
