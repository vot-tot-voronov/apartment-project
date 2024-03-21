import { IUserSchema } from '@/entities/User';
import { ILoginFormSchema } from '@/features/loginByUsername';

export interface IStateSchema {
  user: IUserSchema;

  // async reducers
  loginForm?: ILoginFormSchema;
}

export type KeysOfStateSchema = keyof IStateSchema;
