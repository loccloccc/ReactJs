import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Ex1 from "./pages/PTIT_CNTT04_IT104_Session27_Bai01/Ex1";
import Home from "./pages/PTIT_CNTT04_IT104_Session27_Bai01/Home";
import About from "./pages/PTIT_CNTT04_IT104_Session27_Bai01/About";
import Contact from "./pages/PTIT_CNTT04_IT104_Session27_Bai01/Contact";
import ProductList from "./pages/PTIT_CNTT04_IT104_Session27_Bai02/ProductList";
import ProductDetail from "./pages/PTIT_CNTT04_IT104_Session27_Bai02/ProductDetail";
import TaskList from "./pages/PTIT_CNTT04_IT104_Session27_Bai03/TaskList";
import TaskDetail from "./pages/PTIT_CNTT04_IT104_Session27_Bai03/TaskDetail";
import BlogLayout from "./pages/PTIT_CNTT04_IT104_Session27_Bai05/BlogLayout";
import Posts from "./pages/PTIT_CNTT04_IT104_Session27_Bai05/Posts";
import PostDetail from "./pages/PTIT_CNTT04_IT104_Session27_Bai05/PostDetail";
import Ex6 from "./pages/PTIT_CNTT04_IT104_Session27_Bai06/Ex6";
import HomeEx6 from "./pages/PTIT_CNTT04_IT104_Session27_Bai06/HomeEx6";
import ProductEx6 from "./pages/PTIT_CNTT04_IT104_Session27_Bai06/ProductEx6";
import DetailEx6 from "./pages/PTIT_CNTT04_IT104_Session27_Bai06/DetailEx6";
import Ex7 from "./pages/PTIT_CNTT04_IT104_Session27_Bai07/Ex7";
import HomeEx7 from "./pages/PTIT_CNTT04_IT104_Session27_Bai07/HomeEx7";
import AboutEx7 from "./pages/PTIT_CNTT04_IT104_Session27_Bai07/AboutEx7";
import NotFound from "./pages/PTIT_CNTT04_IT104_Session27_Bai07/NotFound";
import Register from "./pages/PTIT_CNTT04_IT104_Session27_Bai08/Register";
import Login from "./pages/PTIT_CNTT04_IT104_Session27_Bai08/Login";
import HomeEx8 from "./pages/PTIT_CNTT04_IT104_Session27_Bai08/HomeEx8";

export default function App() {
  const routers = createBrowserRouter([
    {
      path: "/ex1",
      element: <Ex1></Ex1>,
      children: [
        {
          path: "",
          element: <Home></Home>,
        },
        {
          path: "about",
          element: <About></About>,
        },
        {
          path: "contact",
          element: <Contact></Contact>,
        },
      ],
    },
    {
      path: "/products",
      element: <ProductList></ProductList>,
    },
    {
      path: "/products/:id",
      element: <ProductDetail></ProductDetail>,
    },
    {
      path: "/products/:search",
      element: <ProductList></ProductList>,
    },
    {
      path:"/task",
      element:<TaskList></TaskList>
    },
    {
      path:"/task/:id",
      element:<TaskDetail></TaskDetail>
    },
    {
      path:"/blog",
      element:<BlogLayout></BlogLayout>,
      children:[
        {
          path:"posts",
          element:<Posts></Posts>
        },
        {
          path:"posts/:id",
          element:<PostDetail></PostDetail>
        }
      ]
    },
    {
      path:"ex6",
      element:<Ex6></Ex6>,
      children:[
        {
          path:"",
          element:<HomeEx6></HomeEx6>
        },
        {
          path:"product",
          element:<ProductEx6></ProductEx6>
        },
        {
          path:"detail",
          element:<DetailEx6></DetailEx6>
        }
      ]
    },
    {
      path:"/ex7",
      element:<Ex7></Ex7>,
      children:[
        {
          path:"",
          element:<HomeEx7></HomeEx7>
        },
        {
          path:"about",
          element:<AboutEx7></AboutEx7>
        },
        {
          path:"*",
          element:<NotFound></NotFound>
        }
      ]
    },
    {
      path:"/register",
      element:<Register></Register>
    },
    {
      path:"/login",
      element:<Login></Login>
    },
    {
      path:"/ex8",
      element:<HomeEx8></HomeEx8>
    }

  ]);
  return (
    <div>
      <RouterProvider router={routers}></RouterProvider>
    </div>
  );
}
