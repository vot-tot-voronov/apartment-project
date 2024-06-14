import { z } from 'zod';

import { ErrorMessagesEnum, RegExps } from '@/shared/constants';

export const SignInFormObjectSchema = z.object({
  username: z
    .string({ required_error: ErrorMessagesEnum.REQUIRED })
    .min(4, { message: 'Логин пользователя должен содержать не менее 4 букв' })
    .max(10, { message: 'Логин пользователя должен быть меньше 10 символов' })
    .regex(RegExps.LATIN_LETTERS, { message: 'Логин пользователя должен содержать только латинские буквы' }),
  name: z
    .string({ required_error: ErrorMessagesEnum.REQUIRED })
    .min(1, { message: ErrorMessagesEnum.REQUIRED })
    .regex(RegExps.RUSSIAN_ALPHABET, { message: ErrorMessagesEnum.RUSSIAN_ALPHABET })
    .regex(RegExps.CAPITAL_LETTER, { message: ErrorMessagesEnum.CAPITAL_LETTER }),
  surname: z
    .string({ required_error: ErrorMessagesEnum.REQUIRED })
    .min(1, { message: ErrorMessagesEnum.REQUIRED })
    .regex(RegExps.RUSSIAN_ALPHABET, { message: ErrorMessagesEnum.RUSSIAN_ALPHABET })
    .regex(RegExps.CAPITAL_LETTER, { message: ErrorMessagesEnum.CAPITAL_LETTER }),
  phone: z
    .string({ required_error: ErrorMessagesEnum.REQUIRED })
    .min(1, { message: ErrorMessagesEnum.REQUIRED })
    .regex(RegExps.PHONE, {
      message: ErrorMessagesEnum.PHONE,
    }),
  password: z
    .string({ required_error: ErrorMessagesEnum.REQUIRED })
    .min(6, { message: 'Минимальное количество символов: 6' })
    .regex(RegExps.PASSWORD, {
      message: ErrorMessagesEnum.PASSWORD,
    }),
  confirmedPassword: z
    .string({ required_error: ErrorMessagesEnum.REQUIRED })
    .min(6, { message: 'Минимальное количество символов: 6' })
    .regex(RegExps.PASSWORD, {
      message: ErrorMessagesEnum.PASSWORD,
    }),
});

export const SignInFormSchema = SignInFormObjectSchema.refine(data => data.password === data.confirmedPassword, {
  message: ErrorMessagesEnum.CONFIRMED_PASSWORD,
  path: ['confirmedPassword'],
});

export type SignInFormType = z.infer<typeof SignInFormSchema>;
export const SignInFieldsEnum = SignInFormObjectSchema.keyof().Enum;

export interface ISignInSchema {
  isLoading: boolean;
  error?: string;
}
