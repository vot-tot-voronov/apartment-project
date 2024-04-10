import { createAsyncThunk } from '@reduxjs/toolkit';

import { IThunkConfig } from '@/app/providers/storeProvider';
import { ApartmentItemType } from '@/entities/Apartment';

export const getRentApartmentById = createAsyncThunk<ApartmentItemType, string, IThunkConfig<string>>(
  'rent/getRentApartmentById',
  async (apartmentId, { rejectWithValue, extra: { api } }) => {
    try {
      const response = await api.get<ApartmentItemType>(`/rent/${apartmentId}`);

      if (!response.data) {
        throw new Error();
      }

      return response.data;
    } catch (error) {
      return rejectWithValue('При отправке запроса произошла ошибка');
    }
  },
);
