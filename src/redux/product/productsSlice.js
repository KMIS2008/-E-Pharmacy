import { createSlice} from '@reduxjs/toolkit';
import {fetchproducts, fetchIdProducts, fetchProductsKeyword, getProductsFilter} from '../operations';

const allProducts ={
    products:[],
    productId:null,
    currentPage: 1,
    totalPages: 0,
    message:"",
    isLoading: false,
    error: false, 
}

const handlPending = (state)=> {
    state.isLoading = true}

const handlFulfilled = (state, action)=>{
    state.products = action.payload.products;
    state.totalPages = action.payload.totalPages;
    state.currentPage = action.payload.currentPage;
    state.message=action.payload.message;
    state.isLoading = false;
    state.error = null;
 }

const handlReject =(state, action)=>{
    state.isLoading = false;
    state.error = action.payload;
}

const productsSlice = createSlice({
    name:'products',
    initialState: allProducts,
       
       extraReducers:
       builder=>{
        builder.addCase(fetchproducts.pending, handlPending)
        .addCase(fetchproducts.fulfilled, handlFulfilled)
        .addCase(fetchproducts.rejected, handlReject)
        .addCase(fetchIdProducts.pending, handlPending)
        .addCase(fetchIdProducts.fulfilled, (state,action) => {
            state.productId = action.payload;
            state.isLoading = false;
            state.error = null;
        })
        .addCase(fetchIdProducts.rejected, handlReject)
        .addCase(fetchProductsKeyword.pending, handlPending)
        .addCase(fetchProductsKeyword.fulfilled, handlFulfilled)
        .addCase(fetchProductsKeyword.rejected, handlReject)
        .addCase(getProductsFilter.pending, handlPending)
        .addCase(getProductsFilter.fulfilled, handlFulfilled)
        .addCase(getProductsFilter.rejected, handlReject)
       }
})

export const productsReducer = productsSlice.reducer;