import React, { useEffect} from 'react'

export default function Ex3() {
    useEffect( () => {
        console.log("component da duoc render lan dau");
    },[])
  return (
    <div>
      <p>"Chao mung ban den voi ung dung cua chung toi"</p>
    </div>
  )
}
