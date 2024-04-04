import { AxiosInstance } from 'axios';

import { IUserSchema } from '@/entities/User';
import { ILoginFormSchema } from '@/features/loginByUsername';
import { IProfileCardSchema } from '@/features/getEditProfile';

export interface IStateSchema {
  user: IUserSchema;

  // async reducers
  loginForm?: ILoginFormSchema;
  profileCard?: IProfileCardSchema;
}

export interface IThunkExtraArg {
  api: AxiosInstance;
}

export interface IThunkConfig<T> {
  rejectValue: T;
  extra: IThunkExtraArg;
  state: IStateSchema;
}

export type KeysOfStateSchemaType = keyof IStateSchema;
