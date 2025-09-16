import axios from "axios";
import React, { useEffect, useState } from "react";
type Data = {
  id: number;
  taskName: string;
  status: boolean;
};
export default function App() {
  const [data, setData] = useState<Data[]>([]);
  // lay data
  async function getData() {
    let get_data = await axios.get("http://localhost:3000/tasks");
    setData([...get_data.data]);
  }
  useEffect(() => {
    getData();
  }, []);

  //
  const [nameTask, setNameTask] = useState("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNameTask(e.target.value);
  };
  // ham them cong viec vao data
  async function addTask(task: any) {
    let res = await axios.post("http://localhost:3000/tasks", task);
    return res;
  }

  const handleAddTask = async () => {
    const reponse = await addTask({
      taskName: nameTask,
      status: false,
    });
    const newTask = reponse.data;
    setData([...data, newTask]);
    setNameTask("");
  };
  // xoa
  const handleDeleteTask = async (id: number) => {
    let choice = confirm("Xác nhận xóa .");
    if (choice) {
      await axios.delete(`http://localhost:3000/tasks/${id}`);
      setData(data.filter((task: Data) => task.id !== id));
    }
  };
  const handleEditTask = async (task: Data) => {
    let nameTask2 = prompt("Nhập tên công việc mới");
    let res = await axios.patch(`http://localhost:3000/tasks/${task.id}`, {
      taskName: nameTask2,
    });
    let findIndex = data.findIndex((items: Data) => items.id === res.data.id);
    data[findIndex] = res.data;
    setData([...data]);
  };
  const handleStatus = async (
    e: React.ChangeEvent<HTMLInputElement>,
    task: Data
  ) => {
    const newStatus = e.target.checked;
    const res = await axios.patch(`http://localhost:3000/tasks/${task.id}`, {
      status: newStatus,
    });
    const newData = data.map((item) =>
      item.id === res.data.id ? res.data : item
    );
    setData(newData);
  };

  return (
    <div
      style={{
        width: "30%",
        margin: "auto",
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        alignItems: "center",
        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
      }}
    >
      <h2>Quản lí công việc</h2>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          alignItems: "center",
          justifyContent: "center",
          width: "90%",
          height: "100px",
          boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
          borderRadius: "10px",
        }}
      >
        <input
          type="text"
          placeholder="Nhap ten cong viec"
          style={{
            width: "90%",
            height: "30px",
            borderRadius: "5px",
          }}
          onChange={handleChange}
          value={nameTask}
        />
        <button
          style={{
            width: "91%",
            height: "35px",
            borderRadius: "5px",
            border: "none",
            backgroundColor: "rgb(37,99,235)",
            color: "white",
          }}
          onClick={handleAddTask}
        >
          Thêm công việc
        </button>
      </div>
      <div
        style={{
          display: "flex",
          gap: "10px",
          alignItems: "center",
          justifyContent: "center",
          width: "90%",
          height: "50px",
          boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
          borderRadius: "10px",
        }}
      >
        <button
          style={{
            width: "80px",
            height: "30px",
            border: "none",
            borderRadius: "5px",
          }}
        >
          Tất cả
        </button>
        <button
          style={{
            width: "100px",
            height: "30px",
            border: "none",
            borderRadius: "5px",
          }}
        >
          Hoàn Thành
        </button>
        <button
          style={{
            width: "120px",
            height: "30px",
            border: "none",
            borderRadius: "5px",
          }}
        >
          Chưa hoàn thành
        </button>
      </div>
      {data.map((value: any, index: number) => (
        <div
          key={index}
          style={{
            display: "flex",
            gap: "100px",
            alignItems: "center",
            justifyContent: "center",
            width: "90%",
            height: "50px",
            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
            borderRadius: "10px",
          }}
        >
          <div style={{ display: "flex", gap: "10px" }}>
            <input
              type="checkbox"
              checked={value.status}
              onChange={(e) => handleStatus(e, value)}
            />
            {value.status===true ? <s>{value.taskName}</s> : <div>{value.taskName}</div>}
            
          </div>
          <div style={{ display: "flex", gap: "10px" }}>
            <button onClick={() => handleDeleteTask(value.id)}>Xoa</button>
            <button onClick={() => handleEditTask(value)}>Sua</button>
          </div>
        </div>
      ))}
      <div
        style={{
          width: "100%",
          height: "50px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "15px",
        }}
      >
        <button
          style={{
            width: "200px",
            height: "35px",
            borderRadius: "5px",
            border: "none",
            backgroundColor: "rgb(255,77,79)",
            color: "white",
          }}
        >
          Xóa công việc hoàn thành
        </button>
        <button
          style={{
            width: "200px",
            height: "35px",
            borderRadius: "5px",
            border: "none",
            backgroundColor: "rgb(255,77,79)",
            color: "white",
          }}
        >
          Xóa tất cả công việc
        </button>
      </div>
    </div>
  );
}
