import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
const data = [
    {
        id:1,
        name:"a",
        price:1200
    },
    {
        id:2,
        name:"b",
        price:1200
    },
    {
        id:3,
        name:"c",
        price:1200
    },
]
export default function ProductManger() {
    const [product , setProduct] = useState<any>(data)
    const navigate = useNavigate();
    const handleClick = (id:number) => {
        console.log(id);
        navigate(`/admin/product/ ${id}`)
    }
    return (
    <div>
      <h1>Danh sach san pham</h1>
      <table border={1}>
        <thead>
            <tr>
                <th>STT</th>
                <th>Ten san pham</th>
                <th>Gia</th>
                <th>Hanh dong</th>
            </tr>
        </thead>
        <tbody>
            {
                product.map((value:any , index:number) => {
                    return (
                        <tr key={index}>
                            <td>{value.id}</td>
                            <td>{value.name}</td>
                            <td>{value.price}</td>
                            <td><button onClick={() => handleClick(value.id)}>Xem chi tiet</button></td>
                        </tr>
                    )
                })
            }
        </tbody>
      </table>
    </div>
  )
}
