import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

export default function Admin() {
  return (
    <div>
      trang quan li <br />
      <NavLink to="/admin/user">quan li nguoi dung</NavLink><br />
      <NavLink to="/admin/product">quan li san pham</NavLink>
      <div className="header">
        phan dau trang
      </div>
      <hr />
      <Outlet></Outlet>
      <hr />
      <div className="footer">
        phan chan trang
      </div>
    </div>
  )
}
