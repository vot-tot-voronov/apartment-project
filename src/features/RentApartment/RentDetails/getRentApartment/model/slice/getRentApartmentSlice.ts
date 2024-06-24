import { createSlice } from '@reduxjs/toolkit';

import { IRentApartmentSchema } from '../types/rentApartmentTypes';
import { getRentApartmentById } from '../services/getRentApartment';

const initialState: IRentApartmentSchema = {
  isLoading: false,
};

export const getRentApartmentSlice = createSlice({
  name: 'getRentApartmentSlice',
  initialState,
  reducers: {},
  selectors: {
    getIsLoading: stateSlice => stateSlice.isLoading,
  },
  extraReducers: builder =>
    builder
      .addCase(getRentApartmentById.pending, state => {
        state.isLoading = true;
        state.error = undefined;
      })
      .addCase(getRentApartmentById.fulfilled, (state, action) => {
        state.data = action.payload;
        state.isLoading = false;
      })
      .addCase(getRentApartmentById.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      }),
});
