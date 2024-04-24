import axios from 'axios';
import { Dispatch } from '@reduxjs/toolkit';

import { loginByUsername } from './loginByUsernameService';

import { UserType, userActions } from '@/entities/User';
import { RootStateType } from '@/app/providers/storeProvider';

jest.mock('axios');

const mockedAxios = jest.mocked(axios);

describe('loginByUsernameService.test', () => {
  let dispatch: Dispatch;
  let getState: () => RootStateType;

  beforeEach(() => {
    dispatch = jest.fn();
    getState = jest.fn();
  });

  test('successful login', async () => {
    const mockedData: UserType = { id: '1', username: 'test' };
    mockedAxios.post.mockReturnValue(Promise.resolve({ data: mockedData }));

    const action = loginByUsername({ username: 'test', password: '1234' });
    const result = await action(dispatch, getState, { api: mockedAxios });

    expect(mockedAxios.post).toHaveBeenCalled();
    expect(dispatch).toHaveBeenCalledWith(userActions.setUserData(mockedData));
    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(result.payload).toEqual(mockedData);
  });

  test('Unsuccessful login', async () => {
    mockedAxios.post.mockReturnValue(Promise.reject());

    const action = loginByUsername({ username: 'test', password: '1234' });
    const result = await action(dispatch, getState, { api: mockedAxios });

    expect(mockedAxios.post).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toBe('Ошибка авторизации');
  });
});
