import { createAsyncThunk } from '@reduxjs/toolkit';

import { LoginFormType } from '../types/loginByUsernameTypes';

import { IUser, userActions } from '@/entities/User';
import { USER_INFO_LOCALSTORAGE_KEY } from '@/shared/constants';
import { IThunkConfig } from '@/app/providers/storeProvider';

export const loginByUsername = createAsyncThunk<IUser, LoginFormType, IThunkConfig<string>>(
  'login/loginByUsername',
  async (authData, { dispatch, extra: { api }, rejectWithValue }) => {
    try {
      const { data } = await api.post<IUser>('login', authData);

      localStorage.setItem(USER_INFO_LOCALSTORAGE_KEY, JSON.stringify(data));
      dispatch(userActions.setUserData(data));

      return data;
    } catch (error) {
      return rejectWithValue('Ошибка авторизации');
    }
  },
);
