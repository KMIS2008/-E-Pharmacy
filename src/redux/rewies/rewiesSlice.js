import { createSlice} from '@reduxjs/toolkit';
import {fetchreviews} from '../operations';

const allRewies ={
    reviews:[],
    isLoading: false,
    error: false, 
}

const handlPending = (state)=> {
    state.isLoading = true}

const handlFulfilled = (state, action)=>{
    state.reviews = action.payload;
    state.isLoading = false;
    state.error = null;
 }

const handlReject =(state, action)=>{
    state.isLoading = false;
    state.error = action.payload;
}

const rewiesSlice = createSlice({
    name:'reviews',
    initialState: allRewies,
       
       extraReducers:
       builder=>{
        builder.addCase(fetchreviews.pending, handlPending)
        .addCase(fetchreviews.fulfilled, handlFulfilled)
        .addCase(fetchreviews.rejected, handlReject)
       }
})

export const reviewsReducer = rewiesSlice.reducer;
