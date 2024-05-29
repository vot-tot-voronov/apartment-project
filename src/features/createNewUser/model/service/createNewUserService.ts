import { createAsyncThunk } from '@reduxjs/toolkit';

import { SignInFormType } from '../types/createNewUserTypes';

import { UserType, userActions } from '@/entities/User';
import { USER_INFO_LOCALSTORAGE_KEY } from '@/shared/constants';
import { IThunkConfig } from '@/app/providers/storeProvider';
import { ProfileType } from '@/entities/Profile';

interface IProfileCreatorProps {
  id: string;
  name: string;
  surname: string;
  phone: string;
}

const profileCreator = ({ id, name, surname, phone }: IProfileCreatorProps): ProfileType => ({
  name,
  surname,
  region: null,
  city: '',
  middleName: '',
  phone,
  id,
});

export const createNewUser = createAsyncThunk<UserType, SignInFormType, IThunkConfig<string>>(
  'signIn/createNewUser',
  async ({ username, name, surname, confirmedPassword, phone }, { dispatch, extra: { api }, rejectWithValue }) => {
    try {
      const { data } = await api.post<UserType>('/users', {
        username,
        password: confirmedPassword,
      });

      if (!data) {
        throw new Error();
      }

      await api.post('/profile', { ...profileCreator({ id: data.id, name, surname, phone }) });

      localStorage.setItem(USER_INFO_LOCALSTORAGE_KEY, JSON.stringify(data));
      dispatch(userActions.setUserData(data));

      return data;
    } catch (error) {
      return rejectWithValue('Ошибка при создании пользователя');
    }
  },
);
