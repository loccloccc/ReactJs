import React, { useState } from 'react'

export default function Ex1() {
  const [fullName,setFullName] = useState<string>("Duong Duc Loc")
    return (
    <div>
      <b>Ho va ten : {fullName}</b>
    </div>
  )
}
