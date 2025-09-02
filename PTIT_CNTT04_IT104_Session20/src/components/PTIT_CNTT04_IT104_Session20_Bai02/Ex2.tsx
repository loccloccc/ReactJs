import React , {useState} from 'react'

export default function Ex2() {
    const [nameValue, setNameValue] = useState<string>("")
    const [email, setEmail] = useState<string>("")
    const [infor, setInfor] = useState("")
    const handleName = (e:React.ChangeEvent<HTMLInputElement>) => {
        setNameValue(e.target.value);
    }
    const handleEmail = (e:React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value)
    }
    const handleClick = ( e:React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        const inforData = `Ten : ${nameValue} Email : ${email}`
       setInfor(inforData);
    }
  return (
    <div>
      <input type="text" placeholder='nhap ten' onChange={handleName}/><br />
      <input type="text" placeholder='nhap email' onChange={handleEmail}/><br />
      <button onClick={handleClick}>gui</button><br />
      {infor}
    </div>
  )
}
