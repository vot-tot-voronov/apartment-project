import { createSlice } from '@reduxjs/toolkit';

import { sendComment } from '../services/sendComment';
import { ISendCommentSchema } from '../types/sendCommentTypes';

const initialState: ISendCommentSchema = {
  isLoading: false,
};

export const sendCommentSlice = createSlice({
  name: 'sendCommentSlice',
  initialState,
  reducers: {},
  selectors: {
    getIsLoading: stateSlice => stateSlice.isLoading,
  },
  extraReducers: builder =>
    builder
      .addCase(sendComment.pending, state => {
        state.isLoading = true;
        state.error = undefined;
      })
      .addCase(sendComment.fulfilled, state => {
        state.isLoading = false;
      })
      .addCase(sendComment.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      }),
});
