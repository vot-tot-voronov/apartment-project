import { createSlice } from '@reduxjs/toolkit';

import { IProfileCardSchema } from '../types/profileCardTypes';
import { fetchProfileService } from '../services/fetchProfileService';

const initialState: IProfileCardSchema = {
  isLoading: false,
  readonly: true,
};

export const profileCardSlice = createSlice({
  name: 'profileCard',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchProfileService.pending, state => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(fetchProfileService.fulfilled, (state, action) => {
        state.data = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchProfileService.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      });
  },
});
