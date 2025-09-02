import React, { useState , useEffect } from 'react'

export default function Ex4() {
    const [inputVlaue , setInput] = useState("")
    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {setInput(e.target.value)}
    useEffect(() => {
      document.title = inputVlaue ? `xin chao ${inputVlaue}` : "hay nhap";
    }, [inputVlaue])
  return (
    <div>
      <p>Chao mung ban den voi trang web cua chung toi</p>
      <input type="text" placeholder='nhap' onChange={handleChange}/>
      <p>Tieu de tran se thay doi sau khi ban nhap</p>
    </div>
  )
}
