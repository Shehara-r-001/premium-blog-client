import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface UserState {
  data: {
    id: string;
    email: string;
    stripeCustomerId: string;
  };
  error: string;
  loading: boolean;
}

const initialState: UserState = {
  data: {
    id: '',
    email: '',
    stripeCustomerId: '',
  },
  error: '',
  loading: true,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    getUser: (state: UserState, action: PayloadAction<UserData>) => {
      const { id, email, stripeCustomerID } = action.payload.data.user;
      state.data.id = id;
      state.data.email = email;
      state.data.stripeCustomerId = stripeCustomerID;
      state.error = '';
      state.loading = false;
    },
    failedUser: (state: UserState, action: PayloadAction<string>) => {
      state.data.id = '';
      state.data.email = '';
      state.data.stripeCustomerId = '';
      state.error = action.payload;
      state.loading = false;
    },
    loggedOutUser: (state: UserState) => {
      state.data.id = '';
      state.data.email = '';
      state.data.stripeCustomerId = '';
      state.error = '';
      state.loading = false;
    },
  },
});

export const { getUser, failedUser, loggedOutUser } = userSlice.actions;

export default userSlice.reducer;
