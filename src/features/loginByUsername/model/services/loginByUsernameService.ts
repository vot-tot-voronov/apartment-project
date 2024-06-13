import { createAsyncThunk } from '@reduxjs/toolkit';

import { LoginFormType } from '../types/loginByUsernameTypes';

import { UserType, userActions } from '@/entities/User';
import { USER_INFO_LOCALSTORAGE_KEY } from '@/shared/constants';
import { IThunkConfig } from '@/app/providers/storeProvider';

export const loginByUsername = createAsyncThunk<null, LoginFormType, IThunkConfig<string>>(
  'login/loginByUsername',
  async (authData, { dispatch, extra: { api }, rejectWithValue }) => {
    try {
      const { data } = await api.post<UserType>('login', authData);

      if (!data) {
        throw new Error();
      }

      localStorage.setItem(USER_INFO_LOCALSTORAGE_KEY, JSON.stringify(data));
      dispatch(userActions.setUserData(data));

      return null;
    } catch (error) {
      return rejectWithValue('Неверные данные пользователя или пароля');
    }
  },
);
