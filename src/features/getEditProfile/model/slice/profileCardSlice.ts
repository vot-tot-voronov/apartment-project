import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { fetchProfileService } from '../services/fetchProfileService';
import { IProfileCardSchema } from '../types/profileCardTypes';
import { putProfileService } from '../services/putProfileService';

const initialState: IProfileCardSchema = {
  isLoading: false,
  isReadonly: true,
};

export const profileCardSlice = createSlice({
  name: 'profileCard',
  initialState,
  reducers: {
    setIsReadonly: (state, action: PayloadAction<boolean>) => {
      state.isReadonly = action.payload;
    },
  },
  selectors: {
    getIsLoading: state => state.isLoading,
    getProfileData: state => state.data,
    getError: stateSlice => stateSlice.error,
    getIsReadonly: stateSlice => stateSlice.isReadonly,
  },
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
      })
      .addCase(putProfileService.pending, state => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(putProfileService.fulfilled, (state, action) => {
        state.data = action.payload;
        state.isLoading = false;
        state.isReadonly = true;
      })
      .addCase(putProfileService.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      });
  },
});