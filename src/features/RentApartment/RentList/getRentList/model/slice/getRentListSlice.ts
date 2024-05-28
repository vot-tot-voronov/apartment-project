import { PayloadAction, createEntityAdapter, createSlice } from '@reduxjs/toolkit';

import { getRentList } from '../services/getRentListService';
import { IRentListSchema } from '../types/rentListTypes';

import { ApartmentItemType } from '@/entities/Apartment';
import { RootStateType } from '@/app/providers/storeProvider';

const initialState: IRentListSchema = {
  isLoading: false,
  ids: [],
  entities: {},
  page: 1,
  limit: 6,
  hasMore: true,
};

const rentListApartmentAdapter = createEntityAdapter<ApartmentItemType, string>({
  selectId: rentApartment => rentApartment.id,
});

export const getRentListApartment = rentListApartmentAdapter.getSelectors<RootStateType>(
  state => state.getRentListSlice || rentListApartmentAdapter.getInitialState(),
);

export const getRentListSlice = createSlice({
  name: 'getRentListSlice',
  initialState,
  reducers: {
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    },
  },
  selectors: {
    getIsLoading: stateSlice => stateSlice.isLoading,
  },
  extraReducers: builder =>
    builder
      .addCase(getRentList.pending, (state, action) => {
        state.isLoading = true;
        state.error = undefined;
        if (action.meta.arg.replace) {
          rentListApartmentAdapter.removeAll(state);
        }
      })
      .addCase(getRentList.fulfilled, (state, action) => {
        state.isLoading = false;
        rentListApartmentAdapter.addMany(state, action.payload);
        state.hasMore = action.payload.length >= state.limit;

        if (action.meta.arg.replace) {
          rentListApartmentAdapter.setAll(state, action.payload);
        } else {
          rentListApartmentAdapter.addMany(state, action.payload);
        }
      })
      .addCase(getRentList.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      }),
});

export const { actions: rentListActons } = getRentListSlice;
