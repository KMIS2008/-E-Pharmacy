import { createSlice} from '@reduxjs/toolkit';
import {fetchnearest} from '../operations';

const allNearest ={
    nearest:[],
    isLoading: false,
    error: false, 
}

const handlPending = (state)=> {
    state.isLoading = true}

const handlFulfilled = (state, action)=>{
    state.nearest = action.payload;
    state.isLoading = false;
    state.error = null;
 }

const handlReject =(state, action)=>{
    state.isLoading = false;
    state.error = action.payload;
}

const nearestSlice = createSlice({
    name:'nearest',
    initialState: allNearest,
       
       extraReducers:
       builder=>{
        builder.addCase(fetchnearest.pending, handlPending)
        .addCase(fetchnearest.fulfilled, handlFulfilled)
        .addCase(fetchnearest.rejected, handlReject)
       }
})

export const nearestReducer = nearestSlice.reducer;