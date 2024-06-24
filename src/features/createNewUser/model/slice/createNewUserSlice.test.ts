import { mockedSignInForm } from '../constants';
import { createNewUser } from '../service/createNewUserService';
import { ISignInSchema } from '../types/createNewUserTypes';
import { createNewUserReducer } from './createNewUserSlice';

describe('createNewUserSlice.test', () => {
  test('create new user pending', () => {
    const state: DeepPartial<ISignInSchema> = { error: 'old error', isLoading: false };

    expect(createNewUserReducer(state as ISignInSchema, createNewUser.pending('', { ...mockedSignInForm }))).toEqual({
      error: undefined,
      isLoading: true,
    });
  });

  test('create new user fulfilled', () => {
    const state: DeepPartial<ISignInSchema> = { error: undefined, isLoading: true };

    expect(
      createNewUserReducer(state as ISignInSchema, createNewUser.fulfilled(null, '', { ...mockedSignInForm })),
    ).toEqual({
      error: undefined,
      isLoading: false,
    });
  });

  test('create new user rejected', () => {
    const state: DeepPartial<ISignInSchema> = { error: undefined, isLoading: true };

    expect(
      createNewUserReducer(
        state as ISignInSchema,
        createNewUser.rejected(null, '', { ...mockedSignInForm }, 'Ошибка при создании пользователя'),
      ),
    ).toEqual({
      error: 'Ошибка при создании пользователя',
      isLoading: false,
    });
  });
});
