import React from 'react'
import { Navigate } from 'react-router-dom'

export default function ProtectedRoute(props:any) {
  // kiem tra xem nguoi dung da dang nhap vao he thong hay chua
  const isLogin = false;
  if(isLogin){
    return <Navigate to={"/login"}></Navigate>
  }
  return props.element
}
