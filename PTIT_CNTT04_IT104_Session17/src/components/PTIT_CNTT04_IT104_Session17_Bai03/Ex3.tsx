import React, { useState } from 'react'
export default function Ex3() {
    const [color , setColor] = useState("black");
    const clickColor = () => {
        setColor("red")
    }
    return (
    <div>
      <p style={{color:`${color}`}}>Tieu de van ban</p>
      <button onClick={clickColor}>Thay doi mau</button>
    </div>
  )
}
