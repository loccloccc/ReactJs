import { House, Pencil, Plus, Trash } from "lucide-react";
import React, { useState } from "react";
import { v7 as uuid } from "uuid";

interface Data {
  id: number | string;
  name: string;
  address: string;
  status: string;
}
export default function Ex() {
  const flag = localStorage.getItem("flag");
  // du lieu
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [status, setStatus] = useState("Chưa hoạt động");
  // local
  const [arrData, setArrData] = useState<Data[]>(() => {
    const listData = localStorage.getItem("data");
    return listData ? JSON.parse(listData) : [];
  });
  // sua
  const [edit, setEdit] = useState<number | string | null>(null);

  const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  const handleChangeAddress = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAddress(e.target.value);
  };
  const handleChangeStatus = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setStatus(e.target.value);
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(!name.trim() || !address.trim()){
        alert("Hãy điền đầy đủ thông tin trước khi thêm");
        return;
    }
    if (edit) {
      const update = arrData.map((i) =>
        i.id === edit
          ? { ...i, name: name, address: address, status: status }
          : i
      );
      setArrData(update);
      localStorage.setItem("data", JSON.stringify(update));
      setName("");
      setAddress("");
      setStatus("");
      setEdit(null);
    } else {
      const newData: Data = {
        id: uuid(),
        name: name,
        address: address,
        status: status,
      };
      const listData = [...arrData, newData];
      setArrData(listData);
      localStorage.setItem("data", JSON.stringify(listData));
      setName("");
      setAddress("");
      setStatus("");
    }
    localStorage.setItem("flag", JSON.stringify(0));
  };
  const Edit = (id: number | string | null) => {
    const searchId = arrData.find((i) => i.id === id);
    if (searchId) {
      setName(searchId.name);
      setAddress(searchId.address);
      setStatus(searchId.status);
      setEdit(searchId.id);
    }
    localStorage.setItem("flag", JSON.stringify(1));
  };
  const Dele = (id: number | string | null) => {
    const confirmDele = confirm("Bạn có chắc chắn xóa không");
    if (confirmDele) {
      const idDele = arrData.filter((i) => i.id !== id);
      setArrData(idDele);
      localStorage.setItem("data", JSON.stringify(idDele));
    }
  };
  return (
    <div className="">
      <div className="w-[100%] h-[100px] boder flex justify-center items-center bg-cyan-500 gap-[10px] text-white">
        <House /> Quản lí kho
      </div>
      <div className="w-[100%] h-[150px] boder mt-[50px] bg-cyan-500 text-white flex flex-col justify-center gap-[20px]">
        <p className="flex gap-[10px] ml-[20px]">
          <Plus /> Thêm kho mới
        </p>
        <form action="" onSubmit={handleSubmit}>
          <div className="ml-[20px] flex gap-[30px]">
            <input
              type="text"
              onChange={handleChangeName}
              placeholder="nhap"
              className="border h-[30px] w-[330px] pl-[10px] rounded-sm bg-white text-black"
              value={name}
            />
            <input
              type="text"
              onChange={handleChangeAddress}
              placeholder="nhap"
              className="border h-[30px] w-[330px] pl-[10px] rounded-sm bg-white text-black"
              value={address}
            />
            <select
              value={status}
              name=""
              id=""
              className="border h-[30px] w-[150px] pl-[10px] rounded-sm bg-white text-black"
              onChange={handleChangeStatus}
            >
              <option value="Hoạt động">Hoạt động</option>
              <option value="Chưa hoạt động">Chưa hoạt động</option>
            </select>
            {flag == "1" ? (
              <button className=" w-[70px] h-[30px] text-white rounded-sm bg-blue-800">
                Sửa
              </button>
            ) : (
              <button className=" w-[70px] h-[30px] text-white rounded-sm bg-blue-800">
                Thêm{" "}
              </button>
            )}
          </div>
        </form>
      </div>
      <div>
        <p>Danh sach kho</p>
        <table className="w-[100%] text-left ">
          <thead>
            <tr className="bg-gray-100  h-[40px]">
              <th className="pl-[5px]">Tên kho</th>
              <th>Địa chỉ</th>
              <th>Trạng thái</th>
              <th>Hành Động</th>
            </tr>
          </thead>
          <tbody className="">
            {arrData.map((v, i) => (
              <tr
                className="h-[30px] border-t border-b border-gray-400 h-[40px] "
                key={i}
              >
                <td className="pl-[5px]">{v.name}</td>
                <td>{v.address}</td>
                <td>{v.status}</td>
                <td>
                  <div className="flex gap-[20px]">
                    <button
                      onClick={() => Edit(v.id)}
                      className="w-[70px] h-[25px] bg-orange-500 text-white rounded-sm flex gap-[5px] items-center justify-center"
                    >
                      <Pencil size={18} />
                      Sửa
                    </button>
                    <button
                      onClick={() => Dele(v.id)}
                      className="w-[70px] h-[25px] bg-red-500 text-white rounded-sm flex gap-[5px] items-center justify-center"
                    >
                      <Trash size={18} /> Xóa
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
