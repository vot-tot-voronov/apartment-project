import { z } from 'zod';

import { ErrorMessagesEnum, RegExps } from '@/shared/constants';

export const LoginFormSchema = z.object({
  username: z
    .string({ required_error: ErrorMessagesEnum.REQUIRED })
    .min(4, { message: 'Имя пользователя должно содержать не менее 4 букв' })
    .max(10, { message: 'Имя пользователя должно быть меньше 10 символов' })
    .regex(RegExps.LATIN_LETTERS, { message: 'Имя пользователя должно содержать только латинские буквы' }),
  password: z
    .string({ required_error: ErrorMessagesEnum.REQUIRED })
    .min(6, { message: 'Минимальное количество символов: 6' })
    .regex(RegExps.PASSWORD, {
      message: ErrorMessagesEnum.PASSWORD,
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
