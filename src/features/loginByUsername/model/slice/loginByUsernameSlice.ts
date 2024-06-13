import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { loginByUsername } from '../services/loginByUsernameService';
import { ILoginFormSchema } from '../types/loginByUsernameTypes';

const initialState: ILoginFormSchema = {
  isLoading: false,
};

export const loginByUsernameSlice = createSlice({
  name: 'loginByUsername',
  initialState,
  reducers: {
    setError: (state, action: PayloadAction<string | undefined>) => {
      state.error = action.payload;
    },
  },
  selectors: {
    getIsLoading: sliceState => sliceState.isLoading,
    getError: sliceState => sliceState.error,
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

export const { actions: logInActions } = loginByUsernameSlice;
