import { z } from 'zod';

import { ErrorMessagesEnum, RegExps } from '@/shared/constants';

export const RentRequestFormSchema = z.object({
  name: z
    .string({ required_error: ErrorMessagesEnum.REQUIRED })
    .min(1, { message: ErrorMessagesEnum.REQUIRED })
    .regex(RegExps.RUSSIAN_ALPHABET, { message: ErrorMessagesEnum.RUSSIAN_ALPHABET }),
  email: z.string({ required_error: ErrorMessagesEnum.REQUIRED }).email({ message: ErrorMessagesEnum.EMAIL }),
  phone: z
    .string({ required_error: ErrorMessagesEnum.REQUIRED })
    .min(1, { message: ErrorMessagesEnum.REQUIRED })
    .regex(RegExps.PHONE, {
      message: ErrorMessagesEnum.PHONE,
    }),
});

export type RentRequestFormType = z.infer<typeof RentRequestFormSchema>;
