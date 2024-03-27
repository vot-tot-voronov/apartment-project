import { createAsyncThunk } from '@reduxjs/toolkit';

import { IProfileForm } from '../types/profileCardTypes';

import { IThunkConfig } from '@/app/providers/storeProvider';

export const fetchProfileService = createAsyncThunk<IProfileForm, void, IThunkConfig<string>>(
  'profile/fetchProfileCard',
  async (_, thunkApi) => {
    const {
      rejectWithValue,
      extra: { api },
    } = thunkApi;

    try {
      const response = await api.get<IProfileForm>('/profile');

      return response.data;
    } catch (error) {
      return rejectWithValue('Ошибка получения данных профиля');
    }
  },
);
