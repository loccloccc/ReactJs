import { Button, Input } from "antd";
import { Pencil, Trash2 } from "lucide-react";
import { useState } from "react";
import { v7 as uuid } from "uuid";

interface Task {
  id: number | string;
  name: string;
  isCompleted: boolean;
}

export default function ToDoList() {
  const [task, setTask] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [tasks, setTasks] = useState<Task[]>(() => {
    const taskLocals = localStorage.getItem("tasks");
    return taskLocals ? JSON.parse(taskLocals) : [];
  });
  const [editId, setEditId] = useState<string | number | null>(null);
  const handleChangeTask = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!event.target.value) {
      setError("Tên công việc không được để trống");
      return;
    } else {
      setError("");
      setTask(event.target.value);
    }
  };
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (!task.trim()) {
      setError("Tên công việc không được để trống");
      return;
    }

    if (editId) {
      const updateTasks = tasks.map((t) =>
        t.id === editId ? { ...t, name: task } : t
      );
      setTasks(updateTasks);
      localStorage.setItem("tasks", JSON.stringify(updateTasks));
      setEditId(null);
    } else {
      const newTask: Task = {
        id: uuid(),
        name: task,
        isCompleted: false,
      };
      const taskClones = [...tasks, newTask];
      setTasks(taskClones);
      localStorage.setItem("tasks", JSON.stringify(taskClones));
    }

    setTask("");
  };
  const handleChangeStatus = (id: number | string) => {
    const updateTasks = tasks.map((task) =>
      task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
    );
    setTasks(updateTasks);
    localStorage.setItem("tasks", JSON.stringify(updateTasks));
  };
  const handleChangeEdit = (id: number | string) => {
    const edit = tasks.find((i) => i.id === id);
    if (edit) {
      setTask(edit.name);
      setEditId(edit.id);
    }
  };
  const handleDelete = (id: number | string) => {
    const updateTasks = tasks.filter((task) => task.id !== id);
    setTasks(updateTasks);
    localStorage.setItem("tasks", JSON.stringify(updateTasks));
  };

  return (
    <div className="h-screen flex justify-center items-center">
      <div className="w-[1000px] border border-[#dadada] p-6 rounded-lg shadow-sm">
        <h3 className="text-center text-[24px] font-semibold mb-6">
          Danh sách công việc
        </h3>
        <form onSubmit={handleSubmit} className="flex gap-5 mb-3">
          <Input
            value={task}
            onChange={handleChangeTask}
            placeholder="Nhập tên công việc"
          />
          <Button htmlType="submit" type="primary">
            {editId ? "Cập nhật" : "Thêm"}
          </Button>
        </form>

        {error && (
          <p className="mb-6 text-red-600 text-[14px]">{error}</p>
        )}

        <ul className="mb-6 flex flex-col gap-2">
          {tasks.map((task) => (
            <li
              key={task.id}
              className="flex justify-between items-center border-b pb-1"
            >
              <div className="flex items-center gap-3">
                <input
                  onChange={() => handleChangeStatus(task.id)}
                  type="checkbox"
                  checked={task.isCompleted}
                />
                {task.isCompleted ? (
                  <s>{task.name}</s>
                ) : (
                  <span>{task.name}</span>
                )}
              </div>
              <div className="flex items-center gap-3">
                <Pencil
                  size={18}
                  className="text-orange-400 hover:text-orange-600 cursor-pointer"
                  onClick={() => handleChangeEdit(task.id)}
                />
                <Trash2
                  size={18}
                  className="text-red-400 hover:text-red-600 cursor-pointer"
                  onClick={() => handleDelete(task.id)}
                />
              </div>
            </li>
          ))}
        </ul>
        <div>
          <span>Công việc đã hoàn thành: </span>
          <span>{tasks.filter((t) => t.isCompleted).length}</span> /{" "}
          <span>{tasks.length}</span>
        </div>
      </div>
    </div>
  );
}
