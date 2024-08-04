import {fetchcart, addCart, deleteCart} from './operations';
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

 const handlFulfilledAdd = (state, action)=>{
    state.orders.push(action.payload);
    state.isLoading = false;
    state.error = null;
  }

  const handlFulfilledDelete = (state, action)=>{
    state.orders = state.orders.filter(order => order._id !== action.payload._id);
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
        .addCase(addCart.pending, handlPending)
        .addCase(addCart.fulfilled, handlFulfilledAdd)
        .addCase(addCart.rejected, handlReject)
        .addCase(deleteCart.pending, handlPending)
        .addCase(deleteCart.fulfilled, handlFulfilledDelete)
        .addCase(deleteCart.rejected, handlReject)
       }
})

export const orderReducer = orderSlice.reducer;