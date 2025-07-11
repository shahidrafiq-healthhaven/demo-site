import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import Home from './pages/Home.jsx'
import Product from './pages/Product.jsx'
import ProductDetail from './pages/ProductDetail.jsx'
import Cart from './pages/Cart.jsx'
import Checkout from './pages/Checkout.jsx'
import Aboutus from './pages/Aboutus.jsx'
import Contactus from './pages/Contactus.jsx'
import Partners from './pages/Partners.jsx'
import Login from './pages/Login.jsx'
import { Provider } from 'react-redux'
import {store} from './stores'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/product/:slug",
        element: <Product />
      },
      {
        path: "/product-detail",
        element: <ProductDetail />
      },
      {
        path: "/cart",
        element: <Cart />
      },
      {
        path: "/checkout",
        element: <Checkout />
      },
      {
        path: "/aboutus",
        element: <Aboutus />
      },
      {
        path: "/contactus",
        element: <Contactus />
      },
      {
        path: "/partners",
        element: <Partners />
      },
      {
        path: "/login",
        element: <Login />
      },
     
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
)

