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
import DeliveryForm from './components/deliveryForm/DeliveryForm.jsx'
import { products as initialProducts } from './mocks/products.json'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '',
        element: <Products products={initialProducts} />
      },
      {
        path: 'shoping-cart',
        element: <ShopingCart />
      },
      {
        path: '/checkout-delivery',
        element: <DeliveryForm />
      },
      {
        path: 'products/:id',
        element: <ProductReview products={initialProducts} />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
