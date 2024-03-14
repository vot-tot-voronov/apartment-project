import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { ILoginForm } from '../types/loginByUsernameTypes';

import { IUser, userActions } from '@/entities/User';
import { USER_INFO_LOCALSTORAGE_KEY } from '@/shared/constants';

export const loginByUsername = createAsyncThunk<IUser, ILoginForm, { rejectValue: string }>(
  'login/loginByUsername',
  async (authData, thunkApi) => {
    try {
      const { data } = await axios.post<IUser>('http://localhost:8000/login', authData);

      localStorage.setItem(USER_INFO_LOCALSTORAGE_KEY, JSON.stringify(data));
      thunkApi.dispatch(userActions.setUserData(data));

      return data;
    } catch (error) {
      return thunkApi.rejectWithValue('Ошибка авторизации');
    }
  },
);
