import { IUserSchema } from '@/entities/User';
import { ILoginFormSchema } from '@/features/loginByUsername';

export interface IStateSchema {
  user: IUserSchema;
  loginForm: ILoginFormSchema;
}
