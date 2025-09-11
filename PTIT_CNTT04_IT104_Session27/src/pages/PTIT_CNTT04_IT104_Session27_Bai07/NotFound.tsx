import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

export default function NotFound() {
    const navi = useNavigate();
    const handleClick = () => {
        navi(-1);
    }
  return (
    <div>
       404 trang nay khong ton tai , ban da vao sai trang
      <div style={{
        display:"flex",
        gap:"10px"
      }}>
        <button style={{
            backgroundColor:"blue",
            border:"none",
        }}><NavLink to={"/ex7"} style={{
            textDecoration:"none",
            color:"white",
        }}>Quay ve trang chu</NavLink> </button>
        <button onClick={handleClick}>Quay lai</button>
      </div>
    </div>
  )
}
