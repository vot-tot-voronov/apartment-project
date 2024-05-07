import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { UserType, IUserSchema } from '../types/userTypes';

import { USER_INFO_LOCALSTORAGE_KEY } from '@/shared/constants';

const initialState: IUserSchema = {
  _isInited: false,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserData: (state, action: PayloadAction<UserType>) => {
      state.authData = action.payload;
    },
    checkAuth: state => {
      const user = localStorage.getItem(USER_INFO_LOCALSTORAGE_KEY);

      if (user) {
        state.authData = JSON.parse(user);
      }

      state._isInited = true;
    },
    logout: state => {
      state.authData = undefined;
      localStorage.removeItem(USER_INFO_LOCALSTORAGE_KEY);
    },
  },
});

export const { actions: userActions, reducer: userReducer } = userSlice;
