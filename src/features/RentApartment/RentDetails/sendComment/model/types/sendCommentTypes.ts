import { z } from 'zod';

import { ErrorMessagesEnum } from '@/shared/constants';

export interface ISendCommentSchema {
  isLoading: boolean;
  error?: string;
}

export const SendCommentFormSchema = z.object({
  text: z.string({ required_error: ErrorMessagesEnum.NOT_EMPTY }).min(1, { message: ErrorMessagesEnum.NOT_EMPTY }),
});

export type SendCommentFormType = z.infer<typeof SendCommentFormSchema>;
