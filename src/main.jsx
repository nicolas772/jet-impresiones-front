import * as React from 'react'
import * as ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import ErrorPage from './components/ErrorPage.jsx'
import ProductReview from './components/ProductReview.jsx'
import Products from './components/Products'
import ShopingCart from './components/shopingCart/ShopingCart.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '',
        element: <Products />
      },
      {
        path: 'shoping-cart',
        element: <ShopingCart />
      },
      {
        path: 'products/:productId',
        element: <ProductReview />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
