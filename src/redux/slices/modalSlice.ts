import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface ModalState {
  value: boolean;
}

const initialState: ModalState = {
  value: false,
};

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    modalState: (state: ModalState, action: PayloadAction<boolean>) => {
      state.value = action.payload;
    },
  },
});

export const { modalState } = modalSlice.actions;

export default modalSlice.reducer;
