import { createAsyncThunk } from '@reduxjs/toolkit';

import { IThunkConfig } from '@/app/providers/storeProvider';
import { ProfileFormType } from '@/entities/Profile';

export const putProfileService = createAsyncThunk<ProfileFormType, ProfileFormType, IThunkConfig<string>>(
  'profile/putProfileCard',
  async (data, thunkApi) => {
    const {
      rejectWithValue,
      extra: { api },
    } = thunkApi;

    try {
      const response = await api.put<ProfileFormType>('/profile', data);

      return response.data;
    } catch (error) {
      return rejectWithValue('Не удалось обновить данные пользователя');
    }
  },
);
