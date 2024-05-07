import { createAsyncThunk } from '@reduxjs/toolkit';

import { IThunkConfig } from '@/app/providers/storeProvider';
import { ProfileType } from '@/entities/Profile';

export const fetchProfileService = createAsyncThunk<ProfileType, string, IThunkConfig<string>>(
  'profile/fetchProfileCard',
  async (id, thunkApi) => {
    const {
      rejectWithValue,
      extra: { api },
    } = thunkApi;

    try {
      const response = await api.get<ProfileType>(`/profile/${id}`);

      if (!response.data) {
        throw new Error();
      }

      return response.data;
    } catch (error) {
      return rejectWithValue('Ошибка получения данных профиля');
    }
  },
);
