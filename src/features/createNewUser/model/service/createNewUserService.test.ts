import { Dispatch } from '@reduxjs/toolkit';
import axios from 'axios';

import { createNewUser } from './createNewUserService';
import { mockedSignInForm } from '../constants';

import { RootStateType } from '@/app/providers/storeProvider';
import { UserType, userActions } from '@/entities/User';

jest.mock('axios');

const mockedAxios = jest.mocked(axios);

const mockedUser: UserType = { id: '1', username: 'test' };

describe('createNewUserService.test', () => {
  let dispatch: Dispatch;
  let getState: () => RootStateType;

  beforeEach(() => {
    dispatch = jest.fn();
    getState = jest.fn();
  });

  test('successful new user creation', async () => {
    mockedAxios.post.mockReturnValue(Promise.resolve({ data: { ...mockedUser } }));

    const action = createNewUser({ ...mockedSignInForm });
    const result = await action(dispatch, getState, { api: mockedAxios });

    expect(mockedAxios.post).toHaveBeenCalledTimes(2);
    expect(dispatch).toHaveBeenCalledWith(userActions.setUserData({ ...mockedUser }));
    expect(result.payload).toEqual(null);
    expect(result.meta.requestStatus).toBe('fulfilled');
  });

  test('successful new user creation', async () => {
    mockedAxios.post.mockReturnValue(Promise.resolve({ status: 403 }));

    const action = createNewUser({ ...mockedSignInForm });
    const result = await action(dispatch, getState, { api: mockedAxios });

    expect(mockedAxios.post).toHaveBeenCalledTimes(1);
    expect(result.payload).toEqual('Ошибка при создании пользователя');
    expect(result.meta.requestStatus).toBe('rejected');
  });
});
