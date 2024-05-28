import { createAsyncThunk } from '@reduxjs/toolkit';

import { getRentListPageLimit } from '../selectors/getRentListSelectors';

import { IThunkConfig } from '@/app/providers/storeProvider';
import { ApartmentItemType } from '@/entities/Apartment';

interface IRentListService {
  queryString?: string;
  page?: number;
  replace?: boolean;
}

export const getRentList = createAsyncThunk<Array<ApartmentItemType>, IRentListService, IThunkConfig<string>>(
  'rent/getRentListData',
  async ({ queryString, page = 1 }, { rejectWithValue, extra: { api }, getState }) => {
    const limit = getRentListPageLimit(getState());

    try {
      const response = await api.get<Array<ApartmentItemType>>(`/rent${queryString?.length ? `?${queryString}` : ''}`, {
        params: { _page: page, _limit: limit },
      });

      if (!response.data) {
        throw new Error();
      }

      return response.data;
    } catch (error) {
      return rejectWithValue('При отправке запроса произошла ошибка');
    }
  },
);
