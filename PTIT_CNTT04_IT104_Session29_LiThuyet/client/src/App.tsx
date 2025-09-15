import axios from 'axios'
import React, { useEffect, useState } from 'react'
type User={
  id:number,
  name:string,
}
export default function App() {
  const [users,setUsers]= useState<any>([]);
  const [name, setName] = useState("");
  // ham lay data
 async function getData() {
    let res= await  axios.get("http://localhost:8080/users");
   console.log("res",res);
    setUsers([...res.data]);
  }
  // ham them user vao database
  async function addUserNew(user:any){
    let res = await axios.post("http://localhost:8080/users",user)
  }
  useEffect(()=>{
     getData();
  },[])
  // ham lay gia tri
  const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value)
  }
  // ham them user
  const addUser = () => {
    addUserNew({name:name});
    setUsers([...users]);
    setName("");
  }
  // ham xoa user
  const handleDelete = (id:number) => {
    console.log(id);
    axios.delete(`http://localhost:8080/users/${id}`);
  }
  return (
    <div>
      <input type="text" placeholder='nhap' onChange={handleChange} value={name}/>
      <button onClick={addUser}>them User</button>
      <h1>Danh sach User</h1>
     <ul>
       {users.map((item:any,index:number)=>{
          return <li key={index}> {item.name} <button onClick={() => handleDelete(item.id)}>Xoa</button></li>
      })}
     </ul>
    </div>
  )
}