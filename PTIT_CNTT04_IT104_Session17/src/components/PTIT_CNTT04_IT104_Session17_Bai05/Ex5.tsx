import React, { useState } from 'react'

export default function Ex5() {
  const [inp , setInp] = useState("");
  const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    setInp(e.target.value);
  } 
    return (
    <div>
      <form action="">
        <input type="text" name="" id="" placeholder='nhap' onChange={handleChange}/>
        <p>{inp}</p>
      </form>
    </div>
  )
}
