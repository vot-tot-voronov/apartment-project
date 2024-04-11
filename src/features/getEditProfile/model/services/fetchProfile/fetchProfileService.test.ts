import { Dispatch } from '@reduxjs/toolkit';
import axios from 'axios';

import { fetchProfileService } from './fetchProfileService';

import { RootStateType } from '@/app/providers/storeProvider';
import { ProfileFormType } from '@/entities/Profile';

jest.mock('axios');
const mockedAxios = jest.mocked(axios);

const data: ProfileFormType = {
  name: '',
  surname: '',
  region: {
    value: '',
    label: '',
  },
  phone: '',
  city: '',
};

describe('fetchProfileService.test', () => {
  let dispatch: Dispatch;
  let getState: () => RootStateType;

  beforeEach(() => {
    dispatch = jest.fn();
    getState = jest.fn();
  });

  test('successful profile fetch', async () => {
    mockedAxios.get.mockReturnValue(Promise.resolve({ data }));

    const action = fetchProfileService();
    const result = await action(dispatch, getState, { api: mockedAxios });

    expect(mockedAxios.get).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(result.payload).toEqual(data);
  });

  test('rejected profile fetch', async () => {
    mockedAxios.get.mockReturnValue(Promise.resolve({ status: 403 }));

    const action = fetchProfileService();
    const result = await action(dispatch, getState, { api: mockedAxios });

    expect(mockedAxios.get).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toBe('Ошибка получения данных профиля');
  });
});
