import React, { useCallback, useState } from 'react'

export default function Ex4() {
    const [color,setColor] = useState("");
    const handleColor = useCallback(
        (e:React.ChangeEvent<HTMLInputElement>) => {
            setColor(e.target.value)
        },[color]
    )
  return (
    <div>
      <label htmlFor="">Chon mau:</label>
      <input type="color" name="color" id="" onChange={handleColor}/>
      <p>Mau hien thi</p>
      <div style={{
        width:"50px",
        height:"50px",
        backgroundColor:`${color}`
      }}></div>
    </div>
  )
}
