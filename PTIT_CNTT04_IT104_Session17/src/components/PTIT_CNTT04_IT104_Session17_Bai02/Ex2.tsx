import React, { useState } from 'react'
type Product = {
    id:number,
    name:string,
    price:string,
    quantity:number
}
export default function Ex2() {
    const [product,setProduct] = useState<Product[]>([{
        id:1,
        name:"Pessi",
        price:"1000",
        quantity:10
    }])
  return (
    <div>
        <h2>Thong tin san pham</h2>
        {product.map((v,i) => {
            return (
                <div key={i}>
                    <p>Id : {v.id}</p>
                    <p>NAme : {v.name}</p>
                    <p>Price : {v.price} $</p>
                    <p>Quantity : {v.quantity}</p>
                </div>
            )
        })}
    </div>
  )
}
