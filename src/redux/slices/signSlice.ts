import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface SignState {
  value: string;
}

const initialState: SignState = {
  value: '',
};

export const signSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    signState: (state: SignState, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
  },
});

export const { signState } = signSlice.actions;

export default signSlice.reducer;
