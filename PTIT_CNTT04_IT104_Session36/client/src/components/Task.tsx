import React, { useEffect, useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { useDispatch, useSelector } from "react-redux";
import {
  addTask,
  deleteTask,
  editTask,
  getAllTask,
  toggleStatus,
} from "../store/slices/taskSlice";
import type { Task } from "../ultis/type";

export default function Task() {
  const result = useSelector((data: any) => {
    console.log(data.task.tasks);
    return data.task.tasks;
  });
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllTask());
  }, []);
  // xoa
  const handleDelete = (id: number) => {
    dispatch(deleteTask(id));
  };
  // ham sua
  const handleEdit = (value: Task) => {
    let newName: any = prompt("nhap ten moi :");
    const newTask = {
      ...value,
      taskName: newName,
      completed: false,
      priority: value.priority,
    };
    dispatch(editTask(newTask));
  };
  // ham them
  const [name, setName] = useState("");
  const [first, setFirst] = useState("Cao");
  const handleAddTask = () => {
    const newTask = {
      taskName: name,
      completed: false,
      priority: first,
    };
    dispatch(addTask(newTask));
    setName("");
    setFirst("Cao");
  };
  // thay doi status
  const handleToggle = (value: Task) => {
    dispatch(toggleStatus(value));
  };
  const [search, setSearch] = useState("");
  // hàm lọc tasks
  const [statusFilter, setStatusFilter] = useState("Tất cả");
  const [priority, setPriority] = useState("Tất cả")    
const getFilteredTasks = () => {
  return result
    .filter((item: Task) => {
      if (statusFilter === "Hoàn thành") return item.completed === true;
      if (statusFilter === "Chưa xong") return item.completed === false;
      return true;
    })
    .filter((item: Task) => {
      if (priority === "Cao") return item.priority === "cao";
      if (priority === "Trung bình") return item.priority === "Trung bình";
      if (priority === "Thấp") return item.priority === "Thấp";
      return true;
    })
    .filter((i: Task) =>
      i.taskName.toLowerCase().trim().includes(search.trim().toLowerCase())
    );
};

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <div className="bg-white w-[500px] rounded-xl shadow-lg p-6">
        {/* Header */}
        <h1 className="text-2xl font-bold flex items-center gap-2 mb-6">
          📑 Task Manager
        </h1>

        {/* Add Task */}
        <div className="flex gap-2 mb-6">
          <input
            type="text"
            placeholder="Nhap cong viec"
            className="flex-1 border rounded-lg px-3 py-2 focus:outline-blue-400"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
          <select
            className="border rounded-lg px-2 py-2"
            onChange={(e) => setFirst(e.target.value)}
          >
            <option value={"Cao"}>Cao</option>
            <option value={"Trung bình"}>Trung bình</option>
            <option value={"Thấp"}>Thấp</option>
          </select>
          <button
            className="bg-blue-500 text-white px-4 rounded-lg hover:bg-blue-600"
            onClick={handleAddTask}
          >
            THÊM
          </button>
        </div>

        {/* Filters */}
        <div className="flex gap-2 mb-6">
          <select className="flex-1 border rounded-lg px-2 py-2" onChange={(e) =>setStatusFilter(e.target.value)}>
            <option value={"Tất cả"}>Tất cả</option>
            <option value={"Hoàn thành"}>Hoàn thành</option>
            <option value={"Chưa xong"}>Chưa xong</option>
          </select>
          <select className="flex-1 border rounded-lg px-2 py-2" onChange={(e) => setPriority(e.target.value)}>
            <option value={"Tất cả"}>Tất cả</option>
            <option value={"Cao"}>Cao</option>
            <option value={"Trung bình"}>Trung bình</option>
            <option value={"Thấp"}>Thấp</option>
          </select>
          <input
            type="text"
            placeholder="Tìm kiếm"
            className="flex-1 border rounded-lg px-3 py-2 focus:outline-blue-400"
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {/* Task List */}
        {getFilteredTasks().map((item: Task, index: number) => {
          return (
            <div
              className="flex items-center justify-between bg-gray-50 p-3 rounded-lg shadow-sm"
              key={index}
            >
              <div className="flex items-center gap-10">
                <input
                  type="checkbox"
                  onChange={() => handleToggle(item)}
                  checked={item.completed}
                />
                {item.completed === true ? (
                  <span className="line-through text-gray-500">
                    {item.taskName}
                  </span>
                ) : (
                  <span className=" text-black-500">{item.taskName}</span>
                )}
                {item.priority == "Cao" ? (
                  <span className="bg-green-500 text-white px-2 py-0.5 rounded-full text-xs">
                    {item.priority}
                  </span>
                ) : item.priority == "Trung bình" ? (
                  <span className="bg-yellow-500 text-white px-2 py-0.5 rounded-full text-xs">
                    {item.priority}
                  </span>
                ) : (
                  <span className="bg-red-500 text-white px-2 py-0.5 rounded-full text-xs">
                    {item.priority}
                  </span>
                )}
              </div>
              <div className="flex gap-3 text-gray-500">
                <button
                  className="hover:text-red-500"
                  onClick={() => handleDelete(item.id)}
                >
                  <DeleteIcon />
                </button>
                <button
                  className="hover:text-blue-500"
                  onClick={() => handleEdit(item)}
                >
                  <EditIcon />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
