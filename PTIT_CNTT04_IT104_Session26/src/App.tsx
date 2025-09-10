import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import ProductDetail from './pages/PTIT_CNTT04_IT104_Session26_Bai01/ProductDetail'
import Ex1 from './pages/PTIT_CNTT04_IT104_Session26_Bai01/Ex1'
import Ex2 from './pages/PTIT_CNTT04_IT104_Session26_Bai02/Ex2'
import Student from './pages/PTIT_CNTT04_IT104_Session26_Bai02/Student'
import Student2 from './pages/PTIT_CNTT04_IT104_Session26_Bai03/Student2'
import Home from './pages/PTIT_CNTT04_IT104_Session26_Bai05/Home'
import PrivateRouter from './pages/PTIT_CNTT04_IT104_Session26_Bai05/PrivateRouter'
import Accoun from './pages/PTIT_CNTT04_IT104_Session26_Bai05/Accoun'
import Login from './pages/PTIT_CNTT04_IT104_Session26_Bai05/Login'
import Teams from './pages/PTIT_CNTT04_IT104_Session26_Bai07/Teams'
import TeamsIndex from './pages/PTIT_CNTT04_IT104_Session26_Bai07/TeamsIndex'
import Team from './pages/PTIT_CNTT04_IT104_Session26_Bai07/Team'

export default function App() {
  const routers = createBrowserRouter([
    {
      path:"/product",
      element:<Ex1></Ex1>
    },
    {
      path:"/product/:id",
      element:<ProductDetail></ProductDetail>
    },
    {
      path:"/student",
      element:<Ex2></Ex2>
    },
    {
      path:"/student/:name",
      element:<Student></Student>
    },
    {
      path:"/student2",
      element:<Student2></Student2>
    },
    {
      path:"/",
      element:<Home></Home>
    },
    {
      path:"/account",
      //element: <PrivateRouter element={<Accoun></Accoun>}></PrivateRouter>
      element:<Accoun></Accoun>
    },
    {
      path:"/login",
      element:<Login></Login>
    },
    {
      path:"/teams",
      element:<Teams></Teams>,
      children:[
        {
          index:true,
          element:<TeamsIndex></TeamsIndex>
        },
        {
          path:":id",
          element:<Team></Team>
        }
      ]
    }

  ])
  return (
    <div>
      apppp
      <RouterProvider router={routers}></RouterProvider>
    </div>
  )
}
