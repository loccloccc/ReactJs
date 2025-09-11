import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

export default function Ex1() {
  return (
    <>  
        <div style={{
            width:"100%",
            height:"50px",
            background:"blue",
            display:"flex",
            justifyContent:"space-evenly",
            fontSize:"30px"
        }}>
            <NavLink to={"/ex1"} style={{color:"white"}}>Home</NavLink>
            <NavLink to={"/ex1/about"} style={{color:"white"}}>About</NavLink>
            <NavLink to={"/ex1/contact"} style={{color:"white"}}>Contact</NavLink>
        </div>
        <Outlet></Outlet>
    </>
  )
}
