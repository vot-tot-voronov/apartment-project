import { createSlice } from '@reduxjs/toolkit';

import { ICommentsRentSchema } from '../types/commentsRentType';
import { getCommentsRent } from '../services/getCommentsRent';

const initialState: ICommentsRentSchema = {
  isLoading: false,
};

export const getCommentsRentSlice = createSlice({
  name: 'getCommentsRentSlice',
  initialState,
  reducers: {},
  selectors: {
    getIsLoading: stateSlice => stateSlice.isLoading,
  },
  extraReducers: builder =>
    builder
      .addCase(getCommentsRent.pending, state => {
        state.isLoading = true;
        state.error = undefined;
      })
      .addCase(getCommentsRent.fulfilled, (state, action) => {
        state.data = action.payload;
        state.isLoading = false;
      })
      .addCase(getCommentsRent.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      }),
});

export const { reducer: getRentApartmentReducer } = getCommentsRentSlice;
