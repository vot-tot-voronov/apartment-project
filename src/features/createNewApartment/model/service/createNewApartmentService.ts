import { createAsyncThunk } from '@reduxjs/toolkit';

import { NewApartmentType } from '../types/createNewApartmentTypes';

import { IThunkConfig } from '@/app/providers/storeProvider';
import { ApartmentItemType } from '@/entities/Apartment';

export const createNewApartment = createAsyncThunk<ApartmentItemType, NewApartmentType, IThunkConfig<string>>(
  'apartment/createNewApartment',
  async (apartmentData, { extra: { api }, rejectWithValue }) => {
    try {
      const { data } = await api.post<ApartmentItemType>('/rent', {
        ...apartmentData,
      });

      if (!data) {
        throw new Error();
      }

      return data;
    } catch (error) {
      return rejectWithValue('Ошибка при создании объявления');
    }
  },
);
