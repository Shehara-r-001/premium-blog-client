import { configureStore } from '@reduxjs/toolkit';
import modalReducer from './slices/modalSlice';
import signReducer from './slices/signSlice';
import userReducer from './slices/userSlice';

export const store = configureStore({
  reducer: {
    modal: modalReducer,
    sign: signReducer,
    user: userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
