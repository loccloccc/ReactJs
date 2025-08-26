import React, { useState } from 'react'

export default function Ex6() {
  const [CountText,setCount] = useState<number>(0)
  const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    setCount(e.target.value.length)
  }
    return (
    <div>
        <input type="text" name="" id="" placeholder='nhap du lieu' onChange={handleChange}/>
      <p>ki tu : {CountText}</p>
    </div>
  )
}
