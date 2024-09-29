/* eslint-disable no-param-reassign */
import { User } from '@/types';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: {
    id: '',
    name: 'haonc',
    email: '',
    image: '',
  },
};

export type AuthState = {
  user: null | User;
};
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { setUser } = authSlice.actions;
export default authSlice.reducer;
