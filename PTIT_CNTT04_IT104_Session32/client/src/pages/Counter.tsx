import React from 'react'
import { useSelector } from 'react-redux'

export default function Counter() {
    const result = useSelector(data=>{
        console.log("data");
        return data
    })
  return (
    <div>
      <h1>Ứng dụng counter</h1>
      <p>{result.count}</p>
    </div>
  )
}
