import { createSlice } from '@reduxjs/toolkit';

import { getRentList } from '../services/getRentListService';
import { IRentListSchema } from '../types/rentListTypes';

const initialState: IRentListSchema = {
  isLoading: false,
};

export const getRentListSlice = createSlice({
  name: 'getRentListSlice',
  initialState,
  reducers: {},
  selectors: {
    getIsLoading: stateSlice => stateSlice.isLoading,
  },
  extraReducers: builder =>
    builder
      .addCase(getRentList.pending, state => {
        state.isLoading = true;
        state.error = undefined;
      })
      .addCase(getRentList.fulfilled, (state, action) => {
        state.data = action.payload;
        state.isLoading = false;
      })
      .addCase(getRentList.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      }),
});
