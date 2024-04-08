import { createAsyncThunk } from '@reduxjs/toolkit';

import { IThunkConfig } from '@/app/providers/storeProvider';
import { ProfileFormType } from '@/entities/Profile';

export const fetchProfileService = createAsyncThunk<ProfileFormType, void, IThunkConfig<string>>(
  'profile/fetchProfileCard',
  async (_, thunkApi) => {
    const {
      rejectWithValue,
      extra: { api },
    } = thunkApi;

    try {
      const response = await api.get<ProfileFormType>('/profile');

      if (!response.data) {
        throw new Error();
      }

      return response.data;
    } catch (error) {
      return rejectWithValue('Ошибка получения данных профиля');
    }
  },
);
