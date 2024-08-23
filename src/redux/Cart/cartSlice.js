import {fetchcart, addCart, deleteCart, updateCartQuantity, addCartFinish} from '../operations';
import { createSlice} from '@reduxjs/toolkit';

const allOrders ={
    orders:[],
    finishorders:[],
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

    const handlFulfilledUpdate = (state, action) => {
        const index = state.orders.findIndex(order => order._id === action.payload._id);
        if (index !== -1) {
            state.orders[index].quantity = action.payload.quantity;
        }
        state.isLoading = false;
        state.error = null;
    };

    const handlFulfilledAddFinish = (state, action)=>{
        state.finishorders.push(action.payload);
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
        .addCase(addCart.pending, handlPending)
        .addCase(addCart.fulfilled, handlFulfilledAdd)
        .addCase(addCart.rejected, handlReject)
        .addCase(deleteCart.pending, handlPending)
        .addCase(deleteCart.fulfilled, handlFulfilledDelete)
        .addCase(deleteCart.rejected, handlReject)
        .addCase(updateCartQuantity.pending, handlPending)
        .addCase(updateCartQuantity.fulfilled, handlFulfilledUpdate)
        .addCase(updateCartQuantity.rejected, handlReject)
        .addCase(addCartFinish.pending, handlPending)
        .addCase(addCartFinish.fulfilled, handlFulfilledAddFinish)
        .addCase(addCartFinish.rejected, handlReject)
       }
})

export const orderReducer = orderSlice.reducer;