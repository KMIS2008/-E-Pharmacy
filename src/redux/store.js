import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { authReducer } from "./auth/authSlice";
import {reviewsReducer} from './rewies/rewiesSlice';
import {nearestReducer} from './nearest/nearestSlice';
import {storesReducer} from './stores/storesSlices';
import {productsReducer} from '../redux/product/productsSlice';
import {orderReducer} from './Cart/cartSlice';

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';


const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    reviews: reviewsReducer,
    nearest: nearestReducer,
    stores: storesReducer,
    products: productsReducer,
    orders: orderReducer,
    finishorders:orderReducer,
  },
  
  middleware: getDefaultMiddleware =>
  getDefaultMiddleware({
    serializableCheck: {
      ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
    immutableCheck: false,
  }),
});

export const persistor = persistStore(store);