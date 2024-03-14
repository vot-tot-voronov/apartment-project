import { createSlice } from '@reduxjs/toolkit';

import { ILoginFormSchema } from '../types/loginByUsernameTypes';
import { loginByUsername } from '../services/loginByUsernameService';

const initialState: ILoginFormSchema = {
  username: '',
  password: '',
  isLoading: false,
};

const loginByUsernameSlice = createSlice({
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

export const { actions: loginFormActions, reducer: loginFormReducer } = loginByUsernameSlice;
