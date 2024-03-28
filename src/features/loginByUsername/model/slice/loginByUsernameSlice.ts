import { createSlice } from '@reduxjs/toolkit';

import { loginByUsername } from '../services/loginByUsernameService';
import { ILoginFormSchema } from '../types/loginByUsernameTypes';

const initialState: ILoginFormSchema = {
  isLoading: false,
};

export const loginByUsernameSlice = createSlice({
  name: 'loginByUsername',
  initialState,
  reducers: {},
  selectors: {
    getIsLoading: sliceState => sliceState.isLoading,
  },
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
        state.isLoading = false;
      });
  },
});
