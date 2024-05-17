import { createAsyncThunk } from '@reduxjs/toolkit';

import { IThunkConfig } from '@/app/providers/storeProvider';
import { ApartmentItemType } from '@/entities/Apartment';

export const getRentList = createAsyncThunk<Array<ApartmentItemType>, string | undefined, IThunkConfig<string>>(
  'rent/getRentListData',
  async (params, { rejectWithValue, extra: { api } }) => {
    try {
      const response = await api.get<Array<ApartmentItemType>>(`/rent${params?.length ? `?${params}` : ''}`);

      if (!response.data) {
        throw new Error();
      }

      return response.data;
    } catch (error) {
      return rejectWithValue('При отправке запроса произошла ошибка');
    }
  },
);
