import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

export default function Ex1() {
  return (
    <div>
      <NavLink to={"/ex1/home"}>Home Ex1</NavLink><br />
      <NavLink to={"/ex1/about"}>About Ex1</NavLink><br />
      <NavLink to={"/ex1/contact"}>Contact Ex1</NavLink><br />
      <Outlet></Outlet>
    </div>
  )
}
