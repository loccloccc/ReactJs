import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

export default function Ex5() {
  return (
    <div>
        <NavLink className="home-NavLink" to={"home2"}>Home</NavLink>
        <NavLink className="home-NavLink" to={"product"}>Product</NavLink>
        <NavLink className="home-NavLink" to={"detail"}>Detail</NavLink>
        <hr />
        <Outlet></Outlet>
        <hr />
    </div>
  )
}
