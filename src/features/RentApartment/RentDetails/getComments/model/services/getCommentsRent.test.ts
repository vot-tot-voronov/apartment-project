import { Dispatch } from '@reduxjs/toolkit';
import axios from 'axios';

import { getCommentsRent } from './getCommentsRent';
import { mockedCommentsRent, mockedCommentsRentResponse } from '../constants';

import { RootStateType } from '@/app/providers/storeProvider';

jest.mock('axios');

const mockedAxios = jest.mocked(axios);

describe('rent/getCommentsRent.test', () => {
  let dispatch: Dispatch;
  let getState: () => RootStateType;

  beforeEach(() => {
    dispatch = jest.fn();
    getState = jest.fn();
  });

  test('successful rent comments getting', async () => {
    mockedAxios.get.mockReturnValue(Promise.resolve({ data: mockedCommentsRentResponse }));

    const action = getCommentsRent('1');
    const result = await action(dispatch, getState, { api: mockedAxios });

    expect(mockedAxios.get).toHaveBeenCalled();
    expect(result.payload).toEqual(mockedCommentsRent);
    expect(result.meta.requestStatus).toBe('fulfilled');
  });

  test('rejected rent comments getting', async () => {
    mockedAxios.get.mockReturnValue(Promise.resolve({ status: 403 }));

    const action = getCommentsRent('1');
    const result = await action(dispatch, getState, { api: mockedAxios });

    expect(mockedAxios.get).toHaveBeenCalled();
    expect(result.payload).toEqual('При загрузке комментариев произошла ошибка');
    expect(result.meta.requestStatus).toBe('rejected');
  });
});
