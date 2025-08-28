import React from 'react'

export default function Ex1() {
  const cartItems = [
    {id:1,name:"San pham A" , price : 100000 , quantyti : 2},
    {id:2,name:"San pham B" , price : 200000 , quantyti : 1}
  ]
  const reslut = cartItems.reduce((sum,value) => sum + value.price * value.quantyti ,0)
    return (
    <div>
      tong tien trong gio hang : {reslut.toLocaleString()}
    </div>
  )
}
