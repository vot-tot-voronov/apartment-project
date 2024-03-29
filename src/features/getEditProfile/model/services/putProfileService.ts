import { createAsyncThunk } from '@reduxjs/toolkit';

import { IThunkConfig } from '@/app/providers/storeProvider';
import { IProfileForm } from '@/entities/Profile';

export const putProfileService = createAsyncThunk<IProfileForm, IProfileForm, IThunkConfig<string>>(
  'profile/putProfileCard',
  async (data, thunkApi) => {
    const {
      rejectWithValue,
      extra: { api },
    } = thunkApi;

    try {
      const response = await api.put<IProfileForm>('/profile', data);

      return response.data;
    } catch (error) {
      return rejectWithValue('Не удалось обновить данные пользователя');
    }
  },
);
