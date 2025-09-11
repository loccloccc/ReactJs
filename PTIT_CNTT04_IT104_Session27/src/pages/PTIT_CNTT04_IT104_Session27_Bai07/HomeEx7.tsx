import React from 'react'
import { NavLink } from 'react-router-dom'

export default function HomeEx7() {
  return (
    <div>
      <h1>Trang chu</h1>
      <p>Day la trang chu</p>
      <button><NavLink to={"/ex7/about"}>About</NavLink></button>
    </div>
  )
}
