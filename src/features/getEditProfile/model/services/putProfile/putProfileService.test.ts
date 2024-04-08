import { Dispatch } from '@reduxjs/toolkit';
import axios from 'axios';

import { putProfileService } from './putProfileService';

import { IStateSchema } from '@/app/providers/storeProvider';
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

describe('putProfileService.test', () => {
  let dispatch: Dispatch;
  let getState: () => IStateSchema;

  beforeEach(() => {
    dispatch = jest.fn();
    getState = jest.fn();
  });

  test('successful put request', async () => {
    mockedAxios.put.mockReturnValue(Promise.resolve({ data }));

    const action = putProfileService(data);
    const result = await action(dispatch, getState, { api: mockedAxios });

    expect(mockedAxios.put).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(result.payload).toEqual(data);
  });

  test('rejected put request', async () => {
    mockedAxios.put.mockReturnValue(Promise.reject());

    const action = putProfileService(data);
    const result = await action(dispatch, getState, { api: mockedAxios });

    expect(mockedAxios.put).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toEqual('Не удалось обновить данные пользователя');
  });
});
