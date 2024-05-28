import { z } from 'zod';

import { ErrorMessagesEnum } from '@/shared/constants';

export const LoginFormSchema = z.object({
  username: z.string({ required_error: ErrorMessagesEnum.REQUIRED }),
  password: z.string({ required_error: ErrorMessagesEnum.REQUIRED }),
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
