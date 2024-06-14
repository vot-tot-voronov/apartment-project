import { AxiosInstance } from 'axios';

import { AppDispatchType, RootStateType } from './store';

import { IUserSchema } from '@/entities/User';
import { ILoginFormSchema } from '@/features/loginByUsername';
import { IProfileCardSchema } from '@/features/getEditProfile';
import { IRentApartmentSchema } from '@/features/RentApartment/RentDetails/getRentApartment';
import { ICommentsRentSchema } from '@/features/RentApartment/RentDetails/getComments';
import { ISendCommentSchema } from '@/features/RentApartment/RentDetails/sendComment';
import { IRentListSchema } from '@/features/RentApartment/RentList/getRentList';
import { ISignInSchema } from '@/features/createNewUser';
import { ICreateNewApartmentSchema } from '@/features/createNewApartment';

export interface ISyncSliсesSchema {
  user: IUserSchema;
}

export interface ILazyLoadedSlicesSchema {
  loginByUsername: ILoginFormSchema;
  profileCard: IProfileCardSchema;
  getRentApartmentSlice: IRentApartmentSchema;
  getCommentsRentSlice: ICommentsRentSchema;
  sendCommentSlice: ISendCommentSchema;
  getRentListSlice: IRentListSchema;
  createNewUserSlice: ISignInSchema;
  createNewApartmentSlice: ICreateNewApartmentSchema;
}

export interface IThunkExtraArg {
  api: AxiosInstance;
}

export interface IThunkConfig<T> {
  rejectValue: T;
  extra: IThunkExtraArg;
  state: RootStateType;
  dispatch: AppDispatchType;
}
