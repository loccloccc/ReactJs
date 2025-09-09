import React from 'react'
import { useParams } from 'react-router-dom'

export default function ProductDetail() {
    const paran = useParams();
    console.log(paran);
  return (
    <div>
      chi tiet san pham
    </div>
  )
}
