import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import About from './pages/About'
import Concat from './pages/Concat'
import NotFound from './pages/NotFound'
import Admin from './layout/Admin'
import UserManger from './pages/UserManger'
import ProductManger from './pages/ProductManger'
import './App.css'
import Login from './pages/Login'
import ProductDetail from './pages/ProductDetail'
import ProtectedRoute from './components/ProtectedRoute'

export default function App() {
  const routers = createBrowserRouter([
    {
      path:"/login",
      element:<Login></Login>
    },
    {
      path:"/about",
      element: <About></About>
    },
    {
      path:"/concat",
      element : <Concat></Concat>
    },
    {
      path:"/admin",
      element : <ProtectedRoute element = {<Admin></Admin>}></ProtectedRoute>,
      children:[
        {
          path:"user",
          element:<UserManger></UserManger>
        },
        {
          path:"product",
          element:<ProductManger></ProductManger>
        },
        {
          path:"product/:id",
          element:<ProductDetail></ProductDetail>
        }
      ]
    },
    {
      path:"*",
      element:<NotFound></NotFound>
    }
  ])
  return (
    <div>
      apppp
      <RouterProvider router={routers}></RouterProvider>
    </div>
  )
}
