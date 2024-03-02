import React from 'react'
import Layout from './Layout/Layout'
import Categories from './Categories/Categories'
import { RouterProvider, createBrowserRouter, createHashRouter } from 'react-router-dom'
import Home from './Home/Home'
import Products from './Products/Products'
import Brands from './Brands/Brands'
import Cart from "./Cart/Cart"
import WishList from './WishList/WishList'
import SignOut from './SignOut/SignOut'
import SignIn from './SignIn/SignIn'
import Signup from './Signup/Signup'
import AuthLayout from './Layout/AuthLayout'
import NotFound from './NotFound/NotFound'
import { Offline } from "react-detect-offline";
import ProtectedRoutes from './ProtectedRoutes/ProtectedRoutes'
import ProductDetails from './ProductDetails/ProductDetails'
import Category from './Category/Category'
import CartContextProvider from './Context/CartContext'
import { ToastContainer } from 'react-toastify';
import Address from './Address/Address'
import UserContextProvider from './Context/UserContext'
import ForgotPassword from './ForgotPassword/ForgotPassword'
import VerifyCode from './VerifyCode/VerifyCode'
import NewPassword from './NewPassword/NewPassword'



export default function App() {

  let routes = createHashRouter([
    {
      path: '/', element: <Layout />, children: [
        { index: true, element: <ProtectedRoutes><Home /></ProtectedRoutes> },
        {
          path: 'home', element: <ProtectedRoutes><Home />
          </ProtectedRoutes>
        },
        { path: 'Products', element: <ProtectedRoutes><Products /></ProtectedRoutes> },
        { path: 'Brands', element: <ProtectedRoutes><Brands /></ProtectedRoutes> },
        { path: 'Cart', element: <ProtectedRoutes><Cart /></ProtectedRoutes> },
        { path: 'WishList', element: <ProtectedRoutes><WishList /></ProtectedRoutes> },
        { path: 'Categories', element: <ProtectedRoutes><Categories /></ProtectedRoutes> },
        { path: 'Product-details/:MyId', element: <ProtectedRoutes><ProductDetails /></ProtectedRoutes> },
        { path: 'Category/:Id', element: <ProtectedRoutes><Category /></ProtectedRoutes> },
        { path: 'address/:id', element: <ProtectedRoutes><Address /></ProtectedRoutes> },
        { path: 'SignIn', element: <SignIn /> },
        { path: 'forgot-password', element: <ForgotPassword /> },
        { path: 'verifyCode', element: <VerifyCode /> },
        { path: 'new-Password', element: <NewPassword /> },
        { path: 'signOut', element: <SignOut /> },
        { path: "*", element: <NotFound /> }
      ]
    },
    {
      path: '/', element: <AuthLayout />, children: [
        { path: 'SignIn', element: <SignIn /> },
        { path: 'SignUp', element: <Signup /> }
      ]
    }

  ])
  return (<UserContextProvider>
    <CartContextProvider>
      <RouterProvider router={routes}>
        <Offline>
          <div className='offLine'>You are offline Now!</div>
        </Offline>
      </RouterProvider>
      <ToastContainer theme='colored' autoClose={1500} />
    </CartContextProvider>
  </UserContextProvider>

  )
}
