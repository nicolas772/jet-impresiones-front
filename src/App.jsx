import Navbar from './components/Navbar'
import { Outlet } from 'react-router-dom'
// import BackgroundAnimated from './components/BackgroundAnimated'
import { CartProvider } from './context/cart'

function App () {
  return (
    <>
      {/* <BackgroundAnimated /> */}
      <CartProvider>
        <Navbar />
        <div>
          <Outlet />
        </div>
      </CartProvider>
    </>
  )
}

export default App
