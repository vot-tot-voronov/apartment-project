import { AxiosInstance } from 'axios';

import { AppDispatchType } from './store';

import { IUserSchema } from '@/entities/User';
import { ILoginFormSchema } from '@/features/loginByUsername';
import { IProfileCardSchema } from '@/features/getEditProfile';
import { IRentApartmentSchema } from '@/features/getRentApartment';

export interface IStateSchema {
  user: IUserSchema;

  // async reducers
  loginForm?: ILoginFormSchema;
  profileCard?: IProfileCardSchema;
  getRentApartmentSlice?: IRentApartmentSchema;
}

export interface IThunkExtraArg {
  api: AxiosInstance;
}

export interface IThunkConfig<T> {
  rejectValue: T;
  extra: IThunkExtraArg;
  state: IStateSchema;
  dispatch: AppDispatchType;
}

export type KeysOfStateSchemaType = keyof IStateSchema;
