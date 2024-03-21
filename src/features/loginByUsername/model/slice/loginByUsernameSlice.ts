import { createSlice } from '@reduxjs/toolkit';

import { loginByUsername } from '../services/loginByUsernameService';
import { ILoginFormSchema } from '../types/loginByUsernameTypes';

const initialState: ILoginFormSchema = {
  username: '',
  password: '',
  isLoading: false,
};

export const loginByUsernameSlice = createSlice({
  name: 'loginByUsername',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(loginByUsername.pending, state => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(loginByUsername.fulfilled, state => {
        state.isLoading = false;
      })
      .addCase(loginByUsername.rejected, (state, action) => {
        state.error = action.payload;
      });
  },
});
