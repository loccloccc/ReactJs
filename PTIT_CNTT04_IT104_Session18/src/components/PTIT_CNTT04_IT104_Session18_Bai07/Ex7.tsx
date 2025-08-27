import React, { useReducer } from "react";

type Job = {
  id: number;
  title: string;
};

export default function TodoList() {
  const initial = {
    jobs: JSON.parse(localStorage.getItem("jobs") || "[]"), // lấy từ local
    new_title: "",
  };

  const todoReducer = (state: any, action: any) => {
    switch (action.type) {
      case "ADD": {
        const updated = [...state.jobs, action.payload];
        localStorage.setItem("jobs", JSON.stringify(updated)); // lưu local
        return { ...state, jobs: updated };
      }
      case "DELETE": {
        console.log("tiến hành xóa công việc");
        const result = state.jobs.filter((item: Job) => item.id != action.payload);
        localStorage.setItem("jobs", JSON.stringify(result)); // lưu local
        return { ...state, jobs: result };
      }
      default:
        return state;
    }
  };

  const [todos, dispatch] = useReducer(todoReducer, initial);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    initial.new_title = e.target.value;
  };

  const addTodo = () => {
    const newTodo = {
      id: Math.floor(Math.random() * 9999999),
      title: initial.new_title,
    };
    dispatch({ type: "ADD", payload: newTodo });
  };

  const deleteJob = (id: number) => {
    dispatch({ type: "DELETE", payload: id });
  };

  return (
    <div>
      <input onChange={handleChange} type="text" />
      <button onClick={addTodo}>Thêm</button>
      {todos.jobs.map((item: Job, index: number) => {
        return (
          <li key={index}>
            {item.title}{" "}
            <button onClick={() => deleteJob(item.id)}>Xóa</button>
          </li>
        );
      })}
    </div>
  );
}
