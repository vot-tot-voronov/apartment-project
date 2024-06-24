import { Dispatch } from '@reduxjs/toolkit';
import axios from 'axios';

import { createNewApartment } from './createNewApartmentService';
import { mockedNewApartment } from '../constants';

import { RootStateType } from '@/app/providers/storeProvider';

jest.mock('axios');
const mockedAxios = jest.mocked(axios);

describe('apartment/createNewApartment.test', () => {
  let dispatch: Dispatch;
  let getState: () => RootStateType;

  beforeEach(() => {
    dispatch = jest.fn();
  });

  test('successful apartment creation', async () => {
    mockedAxios.post.mockReturnValue(Promise.resolve({ data: { ...mockedNewApartment, id: '1' } }));

    const action = createNewApartment(mockedNewApartment);
    const result = await action(dispatch, getState, { api: mockedAxios });

    expect(mockedAxios.post).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(result.payload).toEqual({ ...mockedNewApartment, id: '1' });
  });

  test('rejected apartment creation', async () => {
    mockedAxios.post.mockReturnValue(Promise.resolve({ status: 403 }));

    const action = createNewApartment(mockedNewApartment);
    const result = await action(dispatch, getState, { api: mockedAxios });

    expect(mockedAxios.post).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toEqual('Ошибка при создании объявления');
  });
});
