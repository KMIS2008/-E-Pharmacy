import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { NotificationManager } from 'react-notifications';
import 'react-notifications/lib/notifications.css';

axios.defaults.baseURL = "https://e-pharmacy-backend-1.onrender.com/api";

const setAuthHeader = token => {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  };
  
  const clearAuthHeader = () => {
    axios.defaults.headers.common.Authorization = '';
  };

  export const registr = createAsyncThunk(
    'auth/register',
    async (credentials, thunkAPI) => {
      try {
        const res = await axios.post('/user/register', credentials);
        setAuthHeader(res.data.token);
        NotificationManager.success('Your register!', 'Success');
        return res.data;
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
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );

  export const logIn = createAsyncThunk(
    'auth/login',
    async (credentials, thunkAPI) => {
      try {
        const res = await axios.post('/user/login', credentials);
        setAuthHeader(res.data.token);
  
        return res.data;
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
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );

  export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
    try {
      await axios.post('/user/logout');
      clearAuthHeader();
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
      return thunkAPI.rejectWithValue(error.message);
    }
  });

  export const refreshUser = createAsyncThunk(
    'auth/refresh',
    async (_, thunkAPI) => {
      const state = thunkAPI.getState();
      const persistedToken = state.auth.token;
  
      if (persistedToken === null) {
        return thunkAPI.rejectWithValue('Unable to fetch user');
      }
  
      try {
        setAuthHeader(persistedToken);
        const res = await axios.get('/user/current');
        return res.data;
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
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );