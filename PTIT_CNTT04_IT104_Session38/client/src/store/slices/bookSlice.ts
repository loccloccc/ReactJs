import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import type { Book } from "../../utils/types";

export const getAllData = createAsyncThunk("getAllData", async () => {
  const response = await axios.get("http://localhost:8080/books");
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(response.data);
    }, 3000);
  });
});
// them
export const addBook = createAsyncThunk("get/addBook", async (newBook: any) => {
  try {
    const result: any = await axios.post(
      "http://localhost:8080/books",
      newBook
    );
    return result.data;
  } catch (error) {
    console.log(error);
  }
});
// xoa
export const deteleBook = createAsyncThunk(
  "get/deleteBook",
  async (id: number | string) => {
    try {
      const result: any = await axios.delete(
        `http://localhost:8080/books/${id}`
      );
      return id;
    } catch (error) {
      console.log(error);
    }
  }
);

// sua
export const editBook = createAsyncThunk("get/editBook", async (b: any) => {
  try {
    const result = await axios.patch(`http://localhost:8080/books/${b.id}`, b);
    return result.data;
  } catch (error) {
    console.log(error);
  }
});

const bookSlice = createSlice({
  name: "book",
  initialState: {
    books: [],
    loading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllData.pending , (state,action) => {
          state.loading = true;
      })
      .addCase(getAllData.fulfilled, (state, action) => {
        state.loading = false;
        state.books = action.payload
      })
      .addCase(addBook.fulfilled, (state: any, action) => {
        state.books.push(action.payload);
      })
      .addCase(editBook.fulfilled, (state: any, action) => {
        const index = state.books.findIndex(
          (i: any) => i.id === action.payload.id
        );
        state.books[index] = action.payload;
      })
      .addCase(deteleBook.fulfilled, (state: any, action) => {
        state.books = state.books.filter((i: any) => i.id !== action.payload);
      });
  },
});
export default bookSlice.reducer;
