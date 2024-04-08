import { z } from 'zod';

import { ErrorMessagesEnum } from '@/shared/constants';

export const LoginFormSchema = z.object({
  username: z
    .string({ required_error: ErrorMessagesEnum.REQUIRED })
    .min(4, { message: 'Имя пользователя должно содержать не менее 4 букв' })
    .max(10, { message: 'Имя пользователя должно быть меньше 10 символов' })
    .regex(/^[a-zA-Z]+$/, { message: 'Имя пользователя должно содержать только латинские буквы' }),
  password: z
    .string({ required_error: ErrorMessagesEnum.REQUIRED })
    .min(6, { message: 'Минимальное количество символов: 6' })
    .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[^\w\s]).{6,}/, {
      message: 'Пароль должен содержать латинские строчные и заглавные буквы, цифры, спецсимволы',
    }),
});

export type LoginFormType = z.infer<typeof LoginFormSchema>;

export enum LoginFieldEnum {
  USERNAME = 'username',
  PASSWORD = 'password',
}

export interface ILoginFormSchema {
  isLoading: boolean;
  error?: string;
}
