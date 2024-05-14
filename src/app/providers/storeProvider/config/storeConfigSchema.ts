import { AxiosInstance } from 'axios';

import { AppDispatchType, RootStateType } from './store';

import { IUserSchema } from '@/entities/User';
import { ILoginFormSchema } from '@/features/loginByUsername';
import { IProfileCardSchema } from '@/features/getEditProfile';
import { IRentApartmentSchema } from '@/features/RentApartment/getRentApartment';
import { ICommentsRentSchema } from '@/features/RentApartment/getComments';
import { ISendCommentSchema } from '@/features/RentApartment/sendComment';
import { IRentListSchema } from '@/features/RentApartment/getRentList';

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
