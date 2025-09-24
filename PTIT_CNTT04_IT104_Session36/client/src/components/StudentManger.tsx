import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, editUser, getAllUser } from "../store/slices/userSlice";
import type { User } from "../ultis/type";
export default function StudentManger() {
  // lấy dữ liệu và bắn dispatch cho bên userSlice.ts
  const reslut = useSelector((data: any) => {
    return data.users.user;
  });
  const dispatch: any = useDispatch();
  useEffect(() => {
    dispatch(getAllUser());
  }, []);

  // xoa
  const handleDelete = (id: number) => {
    dispatch(deleteUser(id));
  };
  // ham sua
  const [name, setName] = useState("");
  const handleEdit = (value: User) => {
    let newName: any = prompt("nhap ten moi :");
    const newUser = {...value,name:newName}
    dispatch(editUser(newUser));
  };
  return (
    <div>
      <h1>Quan li user</h1>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
      <button>Them</button>
      <ul>
        {reslut.map((item: User, index: number) => {
          return (
            <li key={index}>
              {item.name}{" "}
              <button onClick={() => handleDelete(item.id)}>xoa</button>
              <button onClick={() => handleEdit(item)}>Sua</button>{" "}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
