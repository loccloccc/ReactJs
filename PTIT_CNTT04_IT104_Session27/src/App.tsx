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
      element:<BlogLayout></BlogLayout>
    }

  ]);
  return (
    <div>
      <RouterProvider router={routers}></RouterProvider>
    </div>
  );
}
