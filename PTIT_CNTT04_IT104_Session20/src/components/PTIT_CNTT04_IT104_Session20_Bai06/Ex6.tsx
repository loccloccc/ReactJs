import React , {useEffect, useRef, useState} from 'react'

export default function Ex6() {
    const [isOpen,  setIsOpen]   = useState<boolean>(false)
   const isRef = useRef<HTMLElement>(null)
   const handleOpen = () => {
    setIsOpen(true)
   }
   const handleClose = () => {
    setIsOpen(false)
   }
   useEffect(() => {
    if(isRef) isRef.current?.focus()
   },[isRef])
    return (
    <div>
      <p>Ung dung React voi Modal va Forcus input</p>
      <button onClick={handleOpen}>Mo modal</button>
      {isOpen && (
        <div>
            <input type="text" placeholder='nhap'/>
            <button onClick={handleClose}>dong</button>
        </div>
      )}
    </div>
  )
}
