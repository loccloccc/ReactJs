import React from "react";
import { NavLink, Outlet } from "react-router-dom";

export default function Ex6() {
  return (
    <>
      <div>
        <NavLink to={"/ex6"}>Home</NavLink>
        <NavLink to={"/ex6/product"}>Product</NavLink>
        <NavLink to={"/ex6/detail"}>Detail</NavLink>
      </div>
      <div>
        <Outlet></Outlet>
      </div>
    </>
  );
}
