import { loginByUsername } from '../services/loginByUsernameService';
import { ILoginFormSchema, LoginFormType } from '../types/loginByUsernameTypes';
import { logInByUsernameReducer } from './loginByUsernameSlice';

const mockeFormData: LoginFormType = { username: '', password: '' };

describe('loginByUserNameSlice.test', () => {
  test('login by username pending', () => {
    const state: DeepPartial<ILoginFormSchema> = { error: 'old error', isLoading: false };

    expect(
      logInByUsernameReducer(state as ILoginFormSchema, loginByUsername.pending('', { ...mockeFormData })),
    ).toEqual({
      error: undefined,
      isLoading: true,
    });
  });

  test('login by username fulfilled', () => {
    const state: DeepPartial<ILoginFormSchema> = { error: undefined, isLoading: true };

    expect(
      logInByUsernameReducer(state as ILoginFormSchema, loginByUsername.fulfilled(null, '', { ...mockeFormData })),
    ).toEqual({
      error: undefined,
      isLoading: false,
    });
  });

  test('login by username rejected', () => {
    const state: DeepPartial<ILoginFormSchema> = { error: undefined, isLoading: true };

    expect(
      logInByUsernameReducer(
        state as ILoginFormSchema,
        loginByUsername.rejected(null, '', { ...mockeFormData }, 'Неверные данные пользователя или пароля'),
      ),
    ).toEqual({
      error: 'Неверные данные пользователя или пароля',
      isLoading: false,
    });
  });
});
