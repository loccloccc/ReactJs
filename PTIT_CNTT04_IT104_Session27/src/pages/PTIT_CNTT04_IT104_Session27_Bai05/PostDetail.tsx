import React from 'react'
import {listData} from "./Posts"
import { useParams } from 'react-router-dom'


export default function PostDetail() {
    const {id} = useParams();

    const searchId = listData.find(i => i.id === Number(id));
  return (
    <div>
      <h1>{searchId?.title}</h1>
      <p>{searchId?.excerpt}</p>
    </div>
  )
}
