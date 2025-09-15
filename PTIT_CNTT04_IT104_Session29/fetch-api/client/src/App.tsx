import axios from "axios";
import React, { useEffect, useState } from "react";

type DataStudent = {
  id: number;
  student_name: string;
  email: string;
  address: string;
  phone: string;
  ststus: boolean;
  created_at: string;
};
export default function App() {
  async function getAllProduct() {
    let product = await axios("http://localhost:3000/product");
    console.log("Bai 1 + Bai 2");
    console.log(product.data);
  }
  async function getAllStudent() {
    console.log("Bai 3 + Bai 4");
    let student = await axios("http://localhost:3000/students");
    console.log(student.data);
    setstudentData([...student.data]);
  }

  async function getStudentById(id: number) {
    let res = await axios("http://localhost:3000/students");
  let studentId = res.data.find((i: { id: number }) => i.id === id);
  if (studentId) {
    console.log(`id : ${studentId.id}`);
  } else {
    console.log("Không tìm thấy bản ghi");
  }
  }

  useEffect(() => {
    getAllProduct();
    getAllStudent();
    getStudentById(3);
  }, []);
  const [studentData, setstudentData] = useState<any>([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [tele, setTele] = useState("");

  const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const handleAddress = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAddress(e.target.value);
  };
  const handleTele = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTele(e.target.value);
  };
  async function addStudentNew(studentNew: any) {
    let student = await axios.post(
      "http://localhost:3000/students",
      studentNew
    );
    return student.data;
  }
  // ham them sinh vien
  const addStudent = async () => {
    
    const newStudent = await addStudentNew({
      student_name: name,
      email: email,
      address: address,
      phone: tele,
      status: true,
      created_at: "2025-10-15",
    });
    
    setstudentData([...studentData, newStudent]);
    setName("");
    setAddress("");
    setEmail("");
    setTele("");
  };
  const handleDelete = (id: number) => {
    const confirm2 = confirm("Xac nhan xoa");
    if (confirm2) {
      axios.delete(`http://localhost:3000/students/${id}`);
      setstudentData(
        studentData.fillter((student: DataStudent) => {
          student.id !== id;
        })
      );
      console.log("xoa thanh cong");
    }
  };

  const handleEdit = (id: number) => {};
  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="nhap ten"
          onChange={handleName}
          value={name}
        />
        <br />
        <input
          type="text"
          placeholder="nhap email"
          onChange={handleEmail}
          value={email}
        />
        <br />
        <input
          type="text"
          placeholder="nhap que quan"
          onChange={handleAddress}
          value={address}
        />
        <br />
        <input
          type="text"
          placeholder="nhap sdt"
          onChange={handleTele}
          value={tele}
        />
        <br />
        <button onClick={addStudent}>Them sinh vien</button>
      </div>
      <h1>Danh sach sinh vien</h1>
      <table
        border={1}
        style={{
          width: "100%",
        }}
      >
        <thead>
          <tr>
            <th>
              <input type="checkbox" />
            </th>
            <th>Ten sinh vien</th>
            <th>Email</th>
            <th>Dia chi</th>
            <th>So dien thoai</th>
            <th>Lua chon</th>
          </tr>
        </thead>
        <tbody>
          {studentData.map((v: any, i: number) => {
            return (
              <tr key={i}>
                <td>
                  <input type="checkbox" />
                </td>
                <td>{v.student_name}</td>
                <td>{v.email}</td>
                <td>{v.address}</td>
                <td>{v.phone}</td>
                <td>
                  <button onClick={() => handleEdit(v.id)}>Sua</button>
                  <button onClick={() => handleDelete(v.id)}>Xoa</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
