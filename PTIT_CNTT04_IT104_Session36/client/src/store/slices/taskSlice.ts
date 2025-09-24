import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import type { Task } from "../../ultis/type";

// ham lay data
export const getAllTask = createAsyncThunk("getAllTask", async () => {
  try {
    const response = await axios.get(`http://localhost:8080/tasks`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
});
// ham xoa
export const deleteTask = createAsyncThunk(
  "get/deleteTask",
  async (id: number) => {
    try {
      const response = await axios.delete(`http://localhost:8080/tasks/${id}`);
      return id;
    } catch (error) {
      console.log(error);
    }
  }
);
// ham sua
export const editTask = createAsyncThunk(
  "get/editTask",
  async (newTask: any) => {
    try {
      const response = await axios.patch(
        `http://localhost:8080/tasks/${newTask.id}`,
        newTask
      );
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);
// ham them
export const addTask = createAsyncThunk("get/addTask", async (newTask: any) => {
  try {
    const response = await axios.post(`http://localhost:8080/tasks`, newTask);
    return response.data;
  } catch (error) {
    console.log(error);
  }
});
 // ham thay doi status
 // hàm thay đổi status
export const toggleStatus = createAsyncThunk(
  "get/toggleStatus",
  async (task: any) => {
    try {
      const response = await axios.patch(
        `http://localhost:8080/tasks/${task.id}`,
        { completed: !task.completed } 
      );
      return response.data; 
    } catch (error) {
      throw error;
    }
  }
);



const taskSlice = createSlice({
  name: "task",
  initialState: {
    tasks: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllTask.fulfilled, (state, action) => {
        console.log("lay API thanh cong", action.payload, state.tasks);
        state.tasks = action.payload;
      })
      .addCase(deleteTask.fulfilled, (state, action) => {
        console.log("xoa thanh cong", action.payload);
        state.tasks = state.tasks.filter((i: any) => i.id != action.payload);
      })
      .addCase(editTask.fulfilled, (state: any, action) => {
        const index = state.tasks.findIndex(
          (i: any) => i.id === action.payload.id
        );
        state.tasks[index] = action.payload;
      })
      .addCase(addTask.fulfilled, (state: any, action) => {
        console.log("Thêm thành công", action.payload);
        state.tasks.push(action.payload); 
      })
      .addCase(toggleStatus.fulfilled, (state: any, action) => {
        const index = state.tasks.findIndex(
          (i: any) => i.id === action.payload.id
        );
        state.tasks[index] = action.payload;
    })
  },
});

export default taskSlice.reducer;
