import Navbar from './components/Navbar'
import { Outlet } from 'react-router-dom'
// import BackgroundAnimated from './components/BackgroundAnimated'
import { CartProvider } from './context/cart'
import { NotificationProvider } from './context/notification'

function App () {
  return (
    <>
      {/* <BackgroundAnimated /> */}
      <CartProvider>
        <NotificationProvider>
          <Navbar />
          <div>
            <Outlet />
          </div>
        </NotificationProvider>
      </CartProvider>
    </>
  )
}

export default App
