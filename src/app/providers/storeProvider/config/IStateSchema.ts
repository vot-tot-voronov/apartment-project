import { AxiosInstance } from 'axios';

import { IUserSchema } from '@/entities/User';
import { ILoginFormSchema } from '@/features/loginByUsername';

export interface IStateSchema {
  user: IUserSchema;

  // async reducers
  loginForm?: ILoginFormSchema;
}

export interface IThunkExtraArg {
  api: AxiosInstance;
}

export interface IThunkConfig<T> {
  rejectValue: T;
  extra: IThunkExtraArg;
}

export type KeysOfStateSchema = keyof IStateSchema;
