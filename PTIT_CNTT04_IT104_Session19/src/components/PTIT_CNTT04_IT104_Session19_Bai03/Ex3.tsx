import React, { useEffect, useRef, useState } from 'react'

export default function Ex3() {
    const [inputValue , setInput ] = useState("");
    const count = useRef(0);
    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value)
        count.current = count.current+1
    } 
  return (
    <div>
        <label htmlFor="">Input : </label>
      <input type="text" onChange={handleChange} />
      <p>Comopent da render : {count.current} lan</p>
    </div>
  )
}
