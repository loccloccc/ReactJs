import React, { useEffect, useRef, useState } from 'react'

export default function Hook() {
    /* 
        Hook la nhung ham : 
        + khi dung ham nho :
        1. dau vao ham  nhan gia tri gi
        2. ket qua tra ve cua ham
    */
   // useState
   const a = useState<number>(100);
   console.log(a);
   const [name , setName] = useState<string>("Duc Loc");
   const changeName = () => {
        setName("Duong Loc");
   }
   console.log("component re_render");
   const [count , setCount] = useState<number>(0)
   const tang = () => {
    setCount(count+1)
   } 
   // useEffect
   useEffect(() => {
    console.log("useEffect duoc goi");
   })
   console.log(111111);
   // useRef 
   const useReff = useRef(1);
   console.log(useReff);
   const tangCount = () => {
        useReff.current= useReff.current+1;
        console.log(useReff.current);
   }
   return (
    <div>
      <p>Ten sinh vien : {name}</p>
      <button onClick={changeName}>changeName</button>
      <p>Gia tri ount : {count}</p>
      <button onClick={tang}>Tang</button>
      <p>gia tri count : {useReff.current}</p>
      <button onClick={tangCount}>tang count</button>
    </div>
  )
}
