import { mockedNewApartment } from '../constants';
import { createNewApartment } from '../service/createNewApartmentService';
import { ICreateNewApartmentSchema } from '../types/createNewApartmentTypes';
import { createNewApartmentReducer } from './createNewApartmentSlice';

describe('createNewApartmentSlice.test', () => {
  test('create new apartment pending', () => {
    const state: DeepPartial<ICreateNewApartmentSchema> = { error: 'old error', isLoading: false };

    expect(
      createNewApartmentReducer(
        state as ICreateNewApartmentSchema,
        createNewApartment.pending('', { ...mockedNewApartment }),
      ),
    ).toEqual({
      error: undefined,
      isLoading: true,
    });
  });

  test('create new apartment fulfilled', () => {
    const state: DeepPartial<ICreateNewApartmentSchema> = { error: undefined, isLoading: true };

    expect(
      createNewApartmentReducer(
        state as ICreateNewApartmentSchema,
        createNewApartment.fulfilled({ ...mockedNewApartment, id: '1' }, '', { ...mockedNewApartment }),
      ),
    ).toEqual({
      error: undefined,
      isLoading: false,
    });
  });

  test('create new apartment rejected', () => {
    const state: DeepPartial<ICreateNewApartmentSchema> = { error: undefined, isLoading: true };

    expect(
      createNewApartmentReducer(
        state as ICreateNewApartmentSchema,
        createNewApartment.rejected(null, '', { ...mockedNewApartment }, 'Ошибка при создании объявления'),
      ),
    ).toEqual({
      error: 'Ошибка при создании объявления',
      isLoading: false,
    });
  });
});
