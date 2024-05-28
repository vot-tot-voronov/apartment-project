import { createAsyncThunk } from '@reduxjs/toolkit';

import { getIsLoadingRentList, getRentListPageCount, getRentListPageHasMore } from '../selectors/getRentListSelectors';
import { getRentList } from './getRentListService';
import { rentListActons } from '../slice/getRentListSlice';

import { IThunkConfig } from '@/app/providers/storeProvider';

export const getNextRentListData = createAsyncThunk<void, string | undefined, IThunkConfig<string>>(
  'rent/getNextRentListData',
  async (queryString, thunkApi) => {
    const { getState, dispatch } = thunkApi;
    const hasMore = getRentListPageHasMore(getState());
    const page = getRentListPageCount(getState());
    const isLoading = getIsLoadingRentList(getState());

    if (hasMore && !isLoading) {
      dispatch(rentListActons.setPage(page + 1));
      dispatch(
        getRentList({
          queryString,
          page: page + 1,
        }),
      );
    }
  },
);
