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
import ShopingCart from './components/shopingCart/ShopingCart.jsx'
import Delivery from './components/delivery/Delivery.jsx'
import { products as initialProducts } from './mocks/products.json'
import FilteredProducts from './components/FilteredProducts.jsx'
import PrintWithUs from './components/PrintWithUs.jsx'
import AboutUs from './components/AboutUs.jsx'
import Confirmation from './components/orderConfirmation/Confirmation.jsx'
import TransferConfirmation from './components/orderConfirmation/TransferConfirmation.jsx'
import Home from './components/Home.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '',
        element: <Home />
      },
      {
        path: 'shoping-cart',
        element: <ShopingCart />
      },
      {
        path: 'checkout-delivery',
        element: <Delivery />
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
        path: 'order-confirmation',
        element: <Confirmation />
      },
      {
        path: 'transfer-confirmation',
        element: <TransferConfirmation />
      },
      {
        path: 'category/:filter',
        element: <FilteredProducts products={initialProducts} />
      },
      {
        path: 'products/:id',
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
