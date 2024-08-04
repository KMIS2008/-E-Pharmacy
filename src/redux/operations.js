import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

axios.defaults.baseURL = "https://e-pharmacy-backend-1.onrender.com/api";
const REVIEWS_URL= '/customer-reviews';
const NEAREST_URL='/stores/nearest'; 
const STORES_URL='/stores'; 
const PRODUCT_URL='/products'; 
const CART_URL='/cart';


export const fetchreviews = createAsyncThunk('reviews', async(_, thunkAPI)=>{
    try {
        const response = await axios.get(`${REVIEWS_URL}`);
        return response.data;
        
    } catch (e){
        toast.error(`Error: ${e.message}`, {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 5000, 
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
        return thunkAPI.rejectWithValue(e.message)
    }
})

export const fetchnearest = createAsyncThunk('nearest', async(_, thunkAPI)=>{
    try {
        const response = await axios.get(`${NEAREST_URL}`);
        return response.data;
        
    } catch (e){
        toast.error(`Error: ${e.message}`, {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 5000, 
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
        return thunkAPI.rejectWithValue(e.message)
    }
})

export const fetchstores = createAsyncThunk('nearest', async(_, thunkAPI)=>{
    try {
        const response = await axios.get(`${STORES_URL}`);
        return response.data;
        
    } catch (e){
        toast.error(`Error: ${e.message}`, {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 5000, 
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
        return thunkAPI.rejectWithValue(e.message)
    }
})

export const fetchproducts = createAsyncThunk('products', async(pageNumber, thunkAPI)=>{
    try {
        const response = await axios.get(`${PRODUCT_URL}?page=${pageNumber}&limit=12`);;
        return response.data;
        
    } catch (e){
        toast.error(`Error: ${e.message}`, {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 5000, 
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
        return thunkAPI.rejectWithValue(e.message)
    }
})

export const fetchIdProducts = createAsyncThunk('products/id', async(_id, thunkAPI)=>{
    try {
        const response = await axios.get(`${PRODUCT_URL}/${_id}`);
        return response.data;
        
    } catch (e){
        toast.error(`Error: ${e.message}`, {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 5000, 
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
        return thunkAPI.rejectWithValue(e.message)
    }
})

export const fetchProductsKeyword = createAsyncThunk('products/keywordNews', async({keyword, pageNumber},thunkAPI) => {
    try {
        const response = await axios.get(`${PRODUCT_URL}?keyword=${keyword}&page=${pageNumber}&limit=12`);
        return response.data;
    } catch (e) {
        toast.error(`Error: ${e.message}`, {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 5000, 
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
        return thunkAPI.rejectWithValue(e.message)
    }
});

export const getProductsFilter = createAsyncThunk( 'products/filter', 
    async ({page=1, limit=12, name, category}, thunkApi,) => {
        
    const params = new URLSearchParams();
    params.append('page', page.toString());
    params.append('limit', limit.toString());

    if (name) {
      params.append('keyword', name);
    }
    if (category) {
      params.append('category', category);
    }

    try {
      const response= await axios.get(`${PRODUCT_URL}?${params.toString()}`);
      return response.data;
    } catch (error) {
        toast.error(`Error: ${error.message}`, {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 5000, 
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
      return thunkApi.rejectWithValue({
        message: error.message,
        code: error.response.status,
      });
    }
  },
);

export const fetchcart = createAsyncThunk('cart', async(_, thunkAPI)=>{
    try {
        const response = await axios.get(`${CART_URL}`);
        return response.data;
        
    } catch (e){
        toast.error(`Error: ${e.message}`, {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 5000, 
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
        return thunkAPI.rejectWithValue(e.message)
    }
})

export const addCart = createAsyncThunk('cart/add', async(data, thunkAPI)=>{
    try {
        const response = await axios.post(`${CART_URL}`, data);
    
        return response.data;
    } catch (e){
        toast.error(`Error: ${e.message}`, {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 5000, 
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
        return thunkAPI.rejectWithValue(e.message)
    }
})

export const deleteCart = createAsyncThunk("cart/deleteCart", async(_id, thunkAPI)=>{
    try {
        const response = await axios.delete(`${CART_URL}/${_id}`);
        return response.data;
    } catch (e) {
        return thunkAPI.rejectWithValue(e.message)
    }
})


//////////////////////////////////////////////

// export const fetchnews = createAsyncThunk('news/allNews', async(pageNumber, thunkAPI)=>{
//     try {
//         const response = await axios.get(`${NEWS_URL}?page=${pageNumber}&limit=6`);
//         return response.data;
        
//     } catch (e){
//         toast.error(`Error: ${e.message}`, {
//             position: toast.POSITION.TOP_RIGHT,
//             autoClose: 5000, 
//             hideProgressBar: true,
//             closeOnClick: true,
//             pauseOnHover: true,
//             draggable: true,
//             progress: undefined,
//         });
//         return thunkAPI.rejectWithValue(e.message)
//     }
// })

// export const fetchNewsByKeyword = createAsyncThunk('news/keywordNews', async({keyword, pageNumber},thunkAPI) => {
//     try {
//         const response = await axios.get(`${NEWS_URL}?keyword=${keyword}&page=${pageNumber}&limit=6`);
//         return response.data;
//     } catch (e) {
//         toast.error(`Error: ${e.message}`, {
//             position: toast.POSITION.TOP_RIGHT,
//             autoClose: 5000, 
//             hideProgressBar: true,
//             closeOnClick: true,
//             pauseOnHover: true,
//             draggable: true,
//             progress: undefined,
//         });
//         return thunkAPI.rejectWithValue(e.message)
//     }
// });

// export const fetchnotices = createAsyncThunk('notices', async(pageNumber, thunkAPI)=>{
//     try {
//         const response = await axios.get(`${Notices_URL}?page=${pageNumber}&limit=6`);
//         return response.data;
//     } catch (e){
//         toast.error(`Error: ${e.message}`, {
//             position: toast.POSITION.TOP_RIGHT,
//             autoClose: 5000, 
//             hideProgressBar: true,
//             closeOnClick: true,
//             pauseOnHover: true,
//             draggable: true,
//             progress: undefined,
//         });
//         return thunkAPI.rejectWithValue(e.message)
//     }
// })

// export const fetchnoticesByKeyword = createAsyncThunk('notices/keywordNotice', async({keyword, pageNumber}, thunkAPI)=>{
//     try {
//         const response = await axios.get(`${Notices_URL}?keyword=${keyword}&page=${pageNumber}&limit=6`);
//         return response.data;
//     } catch (e){
//         toast.error(`Error: ${e.message}`, {
//             position: toast.POSITION.TOP_RIGHT,
//             autoClose: 5000, 
//             hideProgressBar: true,
//             closeOnClick: true,
//             pauseOnHover: true,
//             draggable: true,
//             progress: undefined,
//         });
//         return thunkAPI.rejectWithValue(e.message)
//     }
// })

// export const fetchNoticesId = createAsyncThunk('notices/id', async(_id, thunkAPI)=>{
//     try {
//         const response = await axios.get(`${Notices_URL}/${_id}`);
    
//          return response.data;
       
//     } catch (e){
//         toast.error(`Error: ${e.message}`, {
//             position: toast.POSITION.TOP_RIGHT,
//             autoClose: 5000, 
//             hideProgressBar: true,
//             closeOnClick: true,
//             pauseOnHover: true,
//             draggable: true,
//             progress: undefined,
//         });
//         return thunkAPI.rejectWithValue(e.message)
//     }
// })

// export const addNotices = createAsyncThunk('notices/favorites/add', async(_id, thunkAPI)=>{
//     try {
//         const response = await axios.post(`${Notices_URL}/favorites/add/${_id}`);
    
//         return response.data;
//     } catch (e){
//         toast.error(`Error: ${e.message}`, {
//             position: toast.POSITION.TOP_RIGHT,
//             autoClose: 5000, 
//             hideProgressBar: true,
//             closeOnClick: true,
//             pauseOnHover: true,
//             draggable: true,
//             progress: undefined,
//         });
//         return thunkAPI.rejectWithValue(e.message)
//     }
// })

// export const removeNotices = createAsyncThunk('notices/favorites/remove', async(_id, thunkAPI)=>{
//     try {
//         const response = await axios.delete(`${Notices_URL}/favorites/remove/${_id}`);
   
//         return response.data;
        
//     } catch (e){
//         toast.error(`Error: ${e.message}`, {
//             position: toast.POSITION.TOP_RIGHT,
//             autoClose: 5000, 
//             hideProgressBar: true,
//             closeOnClick: true,
//             pauseOnHover: true,
//             draggable: true,
//             progress: undefined,
//         });
//         return thunkAPI.rejectWithValue(e.message)
//     }
// })

// export const fetchFriends = createAsyncThunk('friends', async (_, thunkAPI) => {
//     try {
//         const response = await axios.get(`${Friends_URL}`);
//         return response.data;
//     } catch (e) {
//         toast.error(`Error: ${e.message}`, {
//             position: toast.POSITION.TOP_RIGHT,
//             autoClose: 5000, 
//             hideProgressBar: true,
//             closeOnClick: true,
//             pauseOnHover: true,
//             draggable: true,
//             progress: undefined,
//         });
//         return thunkAPI.rejectWithValue(e.message);
//     }
// });

// export const addPet = createAsyncThunk('pets/add', async ({title,name,species,sex,birthday,imgURL}, thunkAPI) => {
//     try {
//         const response = await axios.post(`${User_URL}/pets/add`, {title,name,species,sex,birthday,imgURL});
//         return response.data;
//     } catch (e) {
//         toast.error(`Error: ${e.message}`, {
//             position: toast.POSITION.TOP_RIGHT,
//             autoClose: 5000, 
//             hideProgressBar: true,
//             closeOnClick: true,
//             pauseOnHover: true,
//             draggable: true,
//             progress: undefined,
//         });
//         return thunkAPI.rejectWithValue(e.message);
//     }
// });

// export const removePet = createAsyncThunk('pets/remove', async (id, thunkAPI) => {
//     try {
//         const response = await axios.delete(`${User_URL}/pets/remove/${id}`);
//         return response.data;
//     } catch (e) {
//         toast.error(`Error: ${e.message}`, {
//             position: toast.POSITION.TOP_RIGHT,
//             autoClose: 5000, 
//             hideProgressBar: true,
//             closeOnClick: true,
//             pauseOnHover: true,
//             draggable: true,
//             progress: undefined,
//         });
//         return thunkAPI.rejectWithValue(e.message);
//     }
// });

// export const fetchUserFull = createAsyncThunk('user/full', async (_, thunkAPI) => {
//     try {
//         const response = await axios.get(`${User_URL}/full`);
//         return response.data;
//     } catch (e) {
//         toast.error(`Error: ${e.message}`, {
//             position: toast.POSITION.TOP_RIGHT,
//             autoClose: 5000, 
//             hideProgressBar: true,
//             closeOnClick: true,
//             pauseOnHover: true,
//             draggable: true,
//             progress: undefined,
//         });
//         return thunkAPI.rejectWithValue(e.message);
//     }
// });

// export const fetchUserEdit = createAsyncThunk('user/edit', async (info, thunkAPI) => {
//     try {
//         const response = await axios.patch(`${User_URL}/edit`, info);
//         return response.data;
//     } catch (e) {
//         toast.error(`Error: ${e.message}`, {
//             position: toast.POSITION.TOP_RIGHT,
//             autoClose: 5000, 
//             hideProgressBar: true,
//             closeOnClick: true,
//             pauseOnHover: true,
//             draggable: true,
//             progress: undefined,
//         });
//         return thunkAPI.rejectWithValue(e.message);
//     }
// });

// export const getNoticesFilter = createAsyncThunk( 'notices/filter', 
//     async ({page=1, limit=6, name, category, gender, species, location, popularity, price}, thunkApi,) => {
        
//     const params = new URLSearchParams();
//     params.append('page', page.toString());
//     params.append('limit', limit.toString());

//     if (name) {
//       params.append('keyword', name);
//     }
//     if (category) {
//       params.append('category', category);
//     }
//     if (gender) {
//       params.append('gender', gender);
//     }
//     if (species) {
//       params.append('species', species);
//     }
//     if (location) {
//         params.append('locationId', location);
//       }
//     if (popularity) {
//         params.append('byPopularity', popularity);
//       }
//     if (price) {
//         params.append('byPrice', price);
//       }

//     try {
//       const response= await axios.get(`${Notices_URL}?${params.toString()}`);
//       return response.data;
//     } catch (error) {
//         toast.error(`Error: ${error.message}`, {
//             position: toast.POSITION.TOP_RIGHT,
//             autoClose: 5000, 
//             hideProgressBar: true,
//             closeOnClick: true,
//             pauseOnHover: true,
//             draggable: true,
//             progress: undefined,
//         });
//       return thunkApi.rejectWithValue({
//         message: error.message,
//         code: error.response.status,
//       });
//     }
//   },
// );