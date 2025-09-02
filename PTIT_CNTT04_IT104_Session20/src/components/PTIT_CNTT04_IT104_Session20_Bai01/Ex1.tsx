import React , {useState} from 'react'

export default function Ex1() {
    const [inputValue, setInputValue] = useState("");
    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    }
    return (
    <div>
      <input type="text"  onChange={handleChange}/><br />
      {inputValue.length > 5 ? "Chuoi nhap vao  dai hon 5 ki tu" : ""}
    </div>
  )
}
