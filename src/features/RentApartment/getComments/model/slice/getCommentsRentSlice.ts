import { PayloadAction, createEntityAdapter, createSlice } from '@reduxjs/toolkit';

import { ICommentsRentSchema } from '../types/commentsRentType';
import { getCommentsRent } from '../services/getCommentsRent';

import { CommentItemType } from '@/entities/Comment';
import { RootStateType } from '@/app/providers/storeProvider';

const initialState: ICommentsRentSchema = {
  isLoading: false,
  ids: [],
  entities: {},
};

const rentCommentsAdapter = createEntityAdapter<CommentItemType, string>({
  selectId: comment => comment.id,
});

export const getRentComments = rentCommentsAdapter.getSelectors<RootStateType>(
  state => state.getCommentsRentSlice || rentCommentsAdapter.getInitialState(),
);

export const getCommentsRentSlice = createSlice({
  name: 'getCommentsRentSlice',
  initialState: rentCommentsAdapter.getInitialState<ICommentsRentSchema>(initialState),
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
      .addCase(getCommentsRent.fulfilled, (state, action: PayloadAction<Array<CommentItemType>>) => {
        rentCommentsAdapter.setAll(state, action.payload);
        state.isLoading = false;
      })
      .addCase(getCommentsRent.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      }),
});
