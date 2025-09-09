import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function About() {
  const navigate = useNavigate();
  const hanldeLogin = () => {
    navigate("/login");
  }
  return (
    <div>
      Trang about
      <button onClick={hanldeLogin}>Login</button>
    </div>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
  )
}
