import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { authReducer } from "./auth/authSlice";
import {reviewsReducer} from './rewiesSlice';
import {nearestReducer} from './nearestSlice';
import {storesReducer} from './storesSlices';
import {productsReducer} from './productsSlice';
import {orderReducer} from './cartSlice';

// import {newsReducer} from './newsSlice';
// import {noticesReducer} from './noticesSlice';
// import {friendReducer} from './friendsSlice';
// import {userReducer} from './userSlice';


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
    // user: userReducer,
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