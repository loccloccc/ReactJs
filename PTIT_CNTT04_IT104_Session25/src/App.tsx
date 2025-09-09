import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Ex1 from "./pages/PTIT_CNTT04_IT104_Session25_Bai01/Ex1";
import Home from "./pages/PTIT_CNTT04_IT104_Session25_Bai01/Home";
import About from "./pages/PTIT_CNTT04_IT104_Session25_Bai01/About";
import Contact from "./pages/PTIT_CNTT04_IT104_Session25_Bai01/Contact";
import Ex3 from "./pages/PTIT_CNTT04_IT104_Session25_Bai03/Ex3";
import Login from "./pages/PTIT_CNTT04_IT104_Session25_Bai03/Login";
import "./App.css";
import Ex4 from "./pages/PTIT_CNTT04_IT104_Session25_Bai04/Ex4";
import RegisterForm from "./pages/PTIT_CNTT04_IT104_Session25_Bai04/RegisterForm";
import NotFound from "./pages/PTIT_CNTT04_IT104_Session25_Bai05/NotFound";
import Ex5 from "./pages/PTIT_CNTT04_IT104_Session25_Bai06/Ex6";
import HomeEx5 from "./pages/PTIT_CNTT04_IT104_Session25_Bai06/HomeEx5";
import Product from "./pages/PTIT_CNTT04_IT104_Session25_Bai06/Product";
import Detail from "./pages/PTIT_CNTT04_IT104_Session25_Bai06/Detail";
import Ex6 from "./pages/PTIT_CNTT04_IT104_Session25_Bai06/Ex6";
import Ex7 from "./pages/PTIT_CNTT04_IT104_Session25_Bai07/Ex7";
import HomePage from "./pages/PTIT_CNTT04_IT104_Session25_Bai07/HomePage";
import CustomLink from "./pages/PTIT_CNTT04_IT104_Session25_Bai07/CustomLink";
import ListUser from "./pages/PTIT_CNTT04_IT104_Session25_Bai08/ListUser";
import UserDetail from "./pages/PTIT_CNTT04_IT104_Session25_Bai08/UserDetail";
import Register from "./pages/PTIT_CNTT04_IT104_Session25_Bai09/Register";
import Login2 from "./pages/PTIT_CNTT04_IT104_Session25_Bai10/Login2";
import HomePage2 from "./pages/PTIT_CNTT04_IT104_Session25_Bai10/HomePage2";
export default function App() {
  const routers = createBrowserRouter([
    {
      path: "ex1",
      element: <Ex1></Ex1>,
      children: [
        {
          path: "home",
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
      path: "ex3",
      element: <Ex3></Ex3>,
    },
    {
      path: "login",
      element: <Login></Login>,
    },
    {
      path: "ex4",
      element: <Ex4></Ex4>,
    },
    {
      path: "register",
      element: <RegisterForm></RegisterForm>,
    },
    {
      path: "*",
      element: <NotFound></NotFound>,
    },
    {
      path: "ex5",
      element: <Ex5></Ex5>,
    },
    {
      path: "ex6",
      element: <Ex6></Ex6>,
      children: [
        {
          path: "home2",
          element: <HomeEx5></HomeEx5>,
        },
        {
          path: "product",
          element: <Product></Product>,
        },
        {
          path: "detail",
          element: <Detail></Detail>,
        },
      ],
    },
    {
      path: "ex7",
      element: <Ex7></Ex7>,
    },
    {
      path: "home-page",
      element: <HomePage></HomePage>,
    },
    {
      path: "custom",
      element: <CustomLink></CustomLink>,
    },
    {
      path:"list-user",
      element:<ListUser></ListUser>
    },
    {
      path:"list-user/:id",
      element:<ListUser></ListUser>
    },
    {
      path:"user-detail",
      element:<UserDetail></UserDetail>
    },
    {
      path:"registerEx10",
      element:<Register></Register>
    },
    {
      path:"loginEx10",
      element:<Login2></Login2>
    },
    {
      path: "home-page-2",
      element: <HomePage2></HomePage2>,
    },

  ]);
  return (
    <div>
      <RouterProvider router={routers}></RouterProvider>
    </div>
  );
}
