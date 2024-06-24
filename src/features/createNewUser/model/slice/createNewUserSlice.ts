import { createSlice } from '@reduxjs/toolkit';

import { ISignInSchema } from '../types/createNewUserTypes';
import { createNewUser } from '../service/createNewUserService';

const initialState: ISignInSchema = {
  isLoading: false,
};

export const createNewUserSlice = createSlice({
  name: 'createNewUserSlice',
  initialState,
  reducers: {},
  selectors: {
    getIsLoading: sliceState => sliceState.isLoading,
  },
  extraReducers: builder => {
    builder
      .addCase(createNewUser.pending, state => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(createNewUser.fulfilled, state => {
        state.isLoading = false;
      })
      .addCase(createNewUser.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      });
  },
});

export const { reducer: createNewUserReducer } = createNewUserSlice;
