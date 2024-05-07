import { z } from 'zod';

export const userSchema = z.object({
  id: z.string(),
  username: z.string(),
});

export type UserType = z.infer<typeof userSchema>;

export interface IUserSchema {
  authData?: UserType;
  _isInited: boolean;
}
