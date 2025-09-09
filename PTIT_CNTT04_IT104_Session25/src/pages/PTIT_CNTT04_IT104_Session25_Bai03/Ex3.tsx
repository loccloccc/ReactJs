import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Ex3() {
    const navigate = useNavigate();
    const handleLogin = () => {
        navigate("/login");
    }
  return (
    <div>
      <p>Ex 3</p>
      <button onClick={handleLogin}>LogIn</button>
    </div>
  )
}
