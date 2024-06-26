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
import FilteredProducts from './components/FilteredProducts.jsx'
import PrintWithUs from './components/PrintWithUs.jsx'
import AboutUs from './components/AboutUs.jsx'

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
        path: 'checkout-delivery',
        element: <DeliveryForm />
      },
      {
        path: 'about-us',
        element: <AboutUs />
      },
      {
        path: 'print-with-us',
        element: <PrintWithUs />
      },
      {
        path: 'category/:filter',
        element: <FilteredProducts products={initialProducts} />
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
