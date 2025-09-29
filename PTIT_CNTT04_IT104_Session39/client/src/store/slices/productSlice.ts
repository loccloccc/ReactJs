import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// ham lay tat ca du lieu san pham
export const getAllProduct = createAsyncThunk("getAllProduct" ,async () => {
    try {
        const respont = await axios.get("http://localhost:8080/product");
        return respont.data
    } catch (error) {
        console.log(error);
    }
})


const productSlice = createSlice({
    name:"product",
    initialState:{
        products : []
    },
    reducers:{},
    extraReducers: (builder) => {
        builder
        .addCase(getAllProduct.pending,() => {})
        .addCase(getAllProduct.fulfilled,(state,action) => {
            state.products = action.payload
        })
    }
})
export default productSlice.reducer