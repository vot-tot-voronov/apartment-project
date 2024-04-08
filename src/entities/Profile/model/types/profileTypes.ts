import { z } from 'zod';

import { SelectItemSchema } from '@/shared/types';
import { ErrorMessagesEnum } from '@/shared/constants';

export enum ProfileFieldsEnum {
  NAME = 'name',
  SURNAME = 'surname',
  MIDDLENAME = 'middleName',
  REGION = 'region',
  CITY = 'city',
  PHONE = 'phone',
}

export const ProfileFormSchema = z.object({
  name: z
    .string({ required_error: ErrorMessagesEnum.REQUIRED })
    .min(1, { message: ErrorMessagesEnum.REQUIRED })
    .regex(/^[А-ЯЁ]/, { message: ErrorMessagesEnum.CAPITAL_LETTER })
    .regex(/^[а-яА-ЯЁё]+$/, { message: ErrorMessagesEnum.RUSSIAN_ALPHABET }),
  surname: z
    .string({ required_error: ErrorMessagesEnum.REQUIRED })
    .min(1, { message: ErrorMessagesEnum.REQUIRED })
    .regex(/^[а-яА-ЯЁё]+$/, { message: ErrorMessagesEnum.RUSSIAN_ALPHABET })
    .regex(/^[А-ЯЁ]/, { message: ErrorMessagesEnum.CAPITAL_LETTER }),
  middleName: z
    .union([
      z
        .string()
        .regex(/^[а-яА-ЯЁё]+$/, { message: ErrorMessagesEnum.RUSSIAN_ALPHABET })
        .regex(/^[А-ЯЁ]/, { message: ErrorMessagesEnum.CAPITAL_LETTER }),
      z.string().length(0),
    ])
    .optional()
    .transform(e => (e === '' ? undefined : e)),
  region: SelectItemSchema.nullable(),
  city: z
    .union([z.string().regex(/^[а-яА-ЯЁё]+$/, { message: ErrorMessagesEnum.RUSSIAN_ALPHABET }), z.string().length(0)])
    .optional()
    .transform(e => (e === '' ? undefined : e)),
  phone: z
    .string({ required_error: ErrorMessagesEnum.REQUIRED })
    .min(1, { message: ErrorMessagesEnum.REQUIRED })
    .regex(/^(\+7|8)-\d{3}-\d{3}-\d{2}-\d{2}$/g, {
      message: 'Введите номер телефона в формате +7|8-XXX-XXX-XX-XX',
    }),
});

export type ProfileFormType = z.infer<typeof ProfileFormSchema>;
