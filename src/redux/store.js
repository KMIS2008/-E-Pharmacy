import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { authReducer } from "./auth/authSlice";

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
    // news: newsReducer,
    // notices: noticesReducer,
    // friends: friendReducer,
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