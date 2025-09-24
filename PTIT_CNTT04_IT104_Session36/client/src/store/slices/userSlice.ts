import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
// hàm lấy dữ liệu trên server  (json-server)
export const getAllUser = createAsyncThunk("getAllUser",async () => {
    try {
        const response = await axios.get(`http://localhost:8080/users`);
        return response.data
    } catch (error) {
        console.log(error);
    }
});



// ham xoa
export const deleteUser = createAsyncThunk("get/deleteUser",async (id:number) => {
    try {
        const response = await axios.delete(`http://localhost:8080/users/${id}`);
        return id
    } catch (error) {
        console.log(error);
    }
});
// ham sua
export const editUser = createAsyncThunk("get/editUser",async (newUser:any) => {
    try {
        const response = await axios.patch(`http://localhost:8080/users/${newUser.id}`,newUser);
        return response.data
    } catch (error) {
        console.log(error);
    }
    
});


const userSlice = createSlice({
    name:"user",
    initialState:{
        user:[]
    },
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(getAllUser.pending , () => {
            console.log("dang xu li qua trinh");
        })
        .addCase(getAllUser.fulfilled ,(state,action) => {
            console.log("lay du lieu thanh cong");
            state.user = action.payload;
        })
        .addCase(getAllUser.rejected,()=>{
            console.log("qua trinh lay du lieu that bai");
        })
        .addCase(deleteUser.fulfilled ,(state,action) => {
             state.user = state.user.filter((i:any) => i.id != action.payload);
        })
        .addCase(editUser.fulfilled ,(state:any,action) => {
            const index = state.user.findIndex((i:any) => i.id === action.payload.id);
            state.user[index] = action.payload;
        })
    }
})
export default userSlice.reducer
// pending : qua trinh dang xu li
// fulfilled : lay du lieu thanh cong
// rejected : qua trinh lay du lieu that bai