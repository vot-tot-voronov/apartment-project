import { z } from 'zod';

import { SelectItemStringSchema } from '@/shared/types';
import { ErrorMessagesEnum, RegExps } from '@/shared/constants';

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
    .regex(RegExps.RUSSIAN_ALPHABET, { message: ErrorMessagesEnum.RUSSIAN_ALPHABET })
    .regex(RegExps.CAPITAL_LETTER, { message: ErrorMessagesEnum.CAPITAL_LETTER }),
  surname: z
    .string({ required_error: ErrorMessagesEnum.REQUIRED })
    .min(1, { message: ErrorMessagesEnum.REQUIRED })
    .regex(RegExps.RUSSIAN_ALPHABET, { message: ErrorMessagesEnum.RUSSIAN_ALPHABET })
    .regex(RegExps.CAPITAL_LETTER, { message: ErrorMessagesEnum.CAPITAL_LETTER }),
  middleName: z
    .union([
      z
        .string()
        .regex(RegExps.RUSSIAN_ALPHABET, { message: ErrorMessagesEnum.RUSSIAN_ALPHABET })
        .regex(RegExps.CAPITAL_LETTER, { message: ErrorMessagesEnum.CAPITAL_LETTER }),
      z.string().length(0),
    ])
    .optional()
    .transform(e => (e === '' ? undefined : e)),
  region: SelectItemStringSchema.nullable(),
  city: z
    .union([
      z.string().regex(RegExps.RUSSIAN_ALPHABET, { message: ErrorMessagesEnum.RUSSIAN_ALPHABET }),
      z.string().length(0),
    ])
    .optional()
    .transform(e => (e === '' ? undefined : e)),
  phone: z
    .string({ required_error: ErrorMessagesEnum.REQUIRED })
    .min(1, { message: ErrorMessagesEnum.REQUIRED })
    .regex(RegExps.PHONE, {
      message: ErrorMessagesEnum.PHONE,
    }),
});

const ProfileSchema = ProfileFormSchema.extend({
  id: z.string(),
});

export type ProfileFormType = z.infer<typeof ProfileFormSchema>;
export type ProfileType = z.infer<typeof ProfileSchema>;
