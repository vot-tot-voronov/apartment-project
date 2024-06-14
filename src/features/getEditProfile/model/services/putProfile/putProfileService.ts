import { createAsyncThunk } from '@reduxjs/toolkit';

import { IThunkConfig } from '@/app/providers/storeProvider';
import { ProfileType } from '@/entities/Profile';

export const putProfileService = createAsyncThunk<ProfileType, ProfileType, IThunkConfig<string>>(
  'profile/putProfileCard',
  async (data, thunkApi) => {
    const {
      rejectWithValue,
      extra: { api },
    } = thunkApi;

    try {
      const response = await api.put<ProfileType>(`/profile/${data.id}`, data);

      if (!response.data) {
        throw new Error();
      }

      return response.data;
    } catch (error) {
      return rejectWithValue('Не удалось обновить данные пользователя');
    }
  },
);
