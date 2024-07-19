/* eslint-disable react-refresh/only-export-components */
import * as React from 'react'
import { useState, useEffect } from 'react'
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
// import { products as initialProducts } from './mocks/products.json'
import FilteredProducts from './components/FilteredProducts.jsx'
import PrintWithUs from './components/PrintWithUs.jsx'
import AboutUs from './components/AboutUs.jsx'
import Confirmation from './components/orderConfirmation/Confirmation.jsx'
import TransferConfirmation from './components/orderConfirmation/TransferConfirmation.jsx'
import Home from './components/Home.jsx'
import ProductService from './services/product.service.js'
import PaymentVerification from './components/orderConfirmation/PaymentVerification.jsx'
// import Loader from './components/Loader.jsx'

function Main () {
  const [products, setProducts] = useState([])

  useEffect(() => {
    ProductService.getAllProducts()
      .then((response) => {
        setProducts(response.data)
      },
      (error) => {
        const _content = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        setProducts(_content)
      }
      )
  }, [])

  const router = createBrowserRouter([
    {
      path: '/',
      element: <App />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: '',
          element: <Home products={products} />
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
          path: 'order-confirmation/:orderID',
          element: <Confirmation />
        },
        {
          path: 'transfer-confirmation/:orderID',
          element: <TransferConfirmation />
        },
        {
          path: 'category/:filter',
          element: <FilteredProducts products={products} />
        },
        {
          path: 'products/:id',
          element: <ProductReview />
        }
      ]
    },
    {
      path: '/payment-verification/:orderID',
      element: <PaymentVerification />,
      errorElement: <ErrorPage />
    }
  ])
  return <RouterProvider router={router} />
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <Main />
)
