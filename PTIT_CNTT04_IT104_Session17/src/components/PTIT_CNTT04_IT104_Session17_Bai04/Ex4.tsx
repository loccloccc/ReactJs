import React, { useState } from 'react'

export default function Ex4() {
  const [hide,setHide] = useState("Hien")
  const click = () => {
    setHide((p) => p === "Hien" ? "An" : "Hien")
  }
    return (
    <div>
      <button onClick={click}>{hide}</button>
      {hide==="An" ? "Tieu de van ban" : ""}
    </div>
  )
}
