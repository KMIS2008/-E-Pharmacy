import { createSlice} from '@reduxjs/toolkit';
import {fetchstores} from '../operations';

const allStores ={
    stores:[],
    isLoading: false,
    error: false, 
}

const handlPending = (state)=> {
    state.isLoading = true}

const handlFulfilled = (state, action)=>{
    state.stores = action.payload;
    state.isLoading = false;
    state.error = null;
 }

const handlReject =(state, action)=>{
    state.isLoading = false;
    state.error = action.payload;
}

const storesSlice = createSlice({
    name:'stores',
    initialState: allStores,
       
       extraReducers:
       builder=>{
        builder.addCase(fetchstores.pending, handlPending)
        .addCase(fetchstores.fulfilled, handlFulfilled)
        .addCase(fetchstores.rejected, handlReject)
       }
})

export const storesReducer = storesSlice.reducer;