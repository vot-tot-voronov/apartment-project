import { z } from 'zod';

import { userSchema } from '@/entities/User';

const commentItemSchema = z.object({
  id: z.string(),
  text: z.string(),
  user: userSchema,
});

export type CommentItemType = z.infer<typeof commentItemSchema>;
