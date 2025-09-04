import React, { useState } from "react";
interface Info {
  id: number | string;
  idStudent: string;
  name: string;
  age: number | string;
  gender: string;
}
let idF = 0;
export default function TodoList2() {
  const [idStudent, setIdStudent] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [error, setErorr] = useState("");
  const [gender, setGender] = useState("");
  const [edit, setEdit] = useState<number | string | null>(null);
  const [checkAdd, setCheck] = useState<boolean>(false);

  const [info, setInfo] = useState<Info[]>(() => {
    const infoLocal = localStorage.getItem("infoList");
    return infoLocal ? JSON.parse(infoLocal) : [];
  });
  const handleChangeId = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIdStudent(e.target.value);
    setErorr("")
  };
  const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
    setErorr("")
  };
  const handleChangeAge = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAge(e.target.value);
    setErorr("")
  };
  const handleChangeGender = (e: React.ChangeEvent<HTMLInputElement>) => {
    setGender(e.target.value);
    setErorr("")
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!idStudent.trim() || !name.trim() || !age.trim() || !gender.trim()) {
      setErorr("khong duoc de trong");
      return;
    }
    if (edit) {
      const update = info.map((t) =>
        t.id === edit ? { ...t, idStudent, name, age, gender } : t
      );
      setInfo(update);
      localStorage.setItem("infoList", JSON.stringify(update));
      setEdit(null);
    } else {
      const newInfo: Info = {
        id: ++idF,
        idStudent: idStudent,
        name: name,
        age: age,
        gender: gender,
      };
      const infors = [...info, newInfo];
      setInfo(infors);
      localStorage.setItem("infoList", JSON.stringify(infors));
      setIdStudent("");
      setName("");
      setAge("");
      setGender("");
      setCheck(false);
    }
  };
  const handleEdit = (id: number | string) => {
    const searchId = info.find((i) => i.id === id);
    if (searchId) {
      setEdit(searchId.id);
      setIdStudent(searchId.idStudent);
      setName(searchId.name);
      setAge(searchId.age);
      setGender(searchId.gender);
      setCheck(true)
    }
  };
  const handleDelete = (id: number | string) => {
    const infoDele = info.filter((i) => i.id !== id);
    setInfo(infoDele);
    localStorage.setItem("infoList", JSON.stringify(infoDele));
  };
  const handleAdd = () => {
    setCheck(true);
  };
  return (
    <>
      {/*dau*/}
      <div className="flex justify-between">
        <div>
          <button
            className="w-[100px] h-[30px] border-none bg-blue-400 hover:bg-blue-600 rounded-md ml-2 cursor-pointer"
            onClick={handleAdd}
          >
            Them
          </button>
        </div>
        <div className="flex gap-[10px]">
          <input
            placeholder="nhapp"
            className="border rounded-md w-[500px] h-[30px] pl-3"
          ></input>
          <button className="w-[100px] h-[30px] border-none bg-blue-400 hover:bg-blue-600 rounded-md cursor-pointer">
            Tim kiem
          </button>
        </div>
        <div>
          <input
            placeholder="Sap xep"
            className="border rounded-md w-[400px] h-[30px] pl-3 mr-2"
          ></input>
        </div>
      </div>
      {/* than */}
      <div>
        <h3>Danh Sach sinh vien</h3>
        <table className="w-[100%] border border-gray-400 border-collapse">
          <thead>
            <tr>
              <th className="border border-gray-400 p-2">#</th>
              <th className="border border-gray-400 p-2">Ma sinh vien</th>
              <th className="border border-gray-400 p-2">Ten sinh vien</th>
              <th className="border border-gray-400 p-2">Tuoi</th>
              <th className="border border-gray-400 p-2">Gioi tinh</th>
              <th className="border border-gray-400 p-2">Hanh dong</th>
            </tr>
          </thead>
          <tbody>
            {info.map((i) => (
              <tr>
                <td className="border border-gray-400 p-2">{i.id}</td>
                <td className="border border-gray-400 p-2">{i.idStudent}</td>
                <td className="border border-gray-400 p-2">{i.name}</td>
                <td className="border border-gray-400 p-2">{i.age}</td>
                <td className="border border-gray-400 p-2">{i.gender}</td>
                <td className="border border-gray-400 p-2">
                  <div className="flex gap-4 justify-center">
                    <button className="w-[50px] h-[30px] bg-blue-400 hover:bg-blue-600 border-none rounded-md cursor-pointer">
                      Xem
                    </button>
                    <button
                      className="w-[50px] h-[30px] bg-yellow-400 hover:bg-yellow-600 border-none rounded-md cursor-pointer"
                      onClick={() => handleEdit(i.id)}
                    >
                      Sua
                    </button>
                    <button
                      className="w-[50px] h-[30px] bg-red-500 hover:bg-red-700 border-none rounded-md cursor-pointer"
                      onClick={() => handleDelete(i.id)}
                    >
                      Xoa
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {/* <Table></Table> */}
      </div>
      {checkAdd === true ? (
        <div>
          <form onSubmit={handleSubmit} className="flex flex-col gap-[15px]">
            <h3>Thong tin sinh vien</h3>
            <div className="flex  flex-col">
              <label htmlFor="">Ma sinh vien :</label>
              <input
                type="text"
                onChange={handleChangeId}
                className=" border w-[350px] h-[30px] rounded-md"
                value={idStudent}
              />
              <p className="text-red-600">{!idStudent.trim() ? error : ""}</p>
            </div>
            <div className="flex  flex-col">
              <label htmlFor="">Ten sinh vien :</label>
              <input
                type="text"
                onChange={handleChangeName}
                className=" border w-[350px] h-[30px] rounded-md"
                value={name}
              />
              <p className="text-red-600">{!name.trim() ? error : ""}</p>
            </div>
            <div className="flex  flex-col">
              <label htmlFor="">Tuoi :</label>
              <input
                type="text"
                onChange={handleChangeAge}
                className=" border w-[350px] h-[30px] rounded-md"
                value={age}
              />
              <p className="text-red-600">{!age.trim() ? error : ""}</p>
            </div>
            <div className="flex  flex-col">
              <label htmlFor="">Gioi tinh :</label>
              <input
                type="text"
                onChange={handleChangeGender}
                className=" border w-[350px] h-[30px] rounded-md"
                value={gender}
              />
              <p className="text-red-600">{!gender.trim() ? error : ""}</p>
            </div>
            <div>
              <button
                type="submit"
                className="w-[100px] h-[30px] border-none bg-blue-400 hover:bg-blue-600 rounded-md"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      ) : (
        ""
      )}
    </>
  );
}
