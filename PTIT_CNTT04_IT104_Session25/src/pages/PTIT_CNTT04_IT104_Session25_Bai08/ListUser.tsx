import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Users = [
  {
    id: 1,
    name: "Nguyen Van A",
    email: "a@gmail.com",
    address: "Ha Noi",
  },
  {
    id: 2,
    name: "Nguyen Van B",
    email: "b@gmail.com",
    address: "Ho Chi Minh",
  },
  {
    id: 3,
    name: "Nguyen Van C",
    email: "c@gmail.com",
    address: "Can Tho",
  },
];
export default function ListUser() {
    const [users , setUser] = useState<any>(Users)
    const nevagati = useNavigate();
    const handleClick = (value:any) => {
        nevagati(`/list-user?${value.id}`,{state:value});
        console.log(value);
    }
  return (
    <div>
      {users.map((v: any, index: number) => (
        <div style={{
            border:"1px solid black"
        }}>
          <div key={index}>
            <p> id : {v.id}</p>
            <p> Ten :{v.name}</p>
            <p> Email :{v.email}</p>
            <p> Dia chi :{v.address}</p>
            <button onClick={() =>handleClick(v)}>Xem chi tiet</button>
          </div>
        </div>
      ))}
    </div>
  );
}
