import {fetchcart} from './operations';
import { createSlice} from '@reduxjs/toolkit';

const allOrders ={
    orders:[],
    isLoading: false,
    error: false, 
}

const handlPending = (state)=> {
    state.isLoading = true}

const handlFulfilled = (state, action)=>{
    state.orders = action.payload;
    state.isLoading = false;
    state.error = null;
 }

const handlReject =(state, action)=>{
    state.isLoading = false;
    state.error = action.payload;
}

const orderSlice = createSlice({
    name:'orders',
    initialState: allOrders,
       
       extraReducers:
       builder=>{
        builder.addCase(fetchcart.pending, handlPending)
        .addCase(fetchcart.fulfilled, handlFulfilled)
        .addCase(fetchcart.rejected, handlReject)
       }
})

export const orderReducer = orderSlice.reducer;