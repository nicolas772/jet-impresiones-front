import Navbar from './components/Navbar'
import { Outlet } from 'react-router-dom'
// import BackgroundAnimated from './components/BackgroundAnimated'

function App () {
  return (
    <>
      {/* <BackgroundAnimated /> */}
      <Navbar />
      <div>
        <Outlet />
      </div>
    </>
  )
}

export default App
