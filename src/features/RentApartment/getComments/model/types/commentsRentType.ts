import { EntityState } from '@reduxjs/toolkit';

import { CommentItemType } from '@/entities/Comment';

export interface ICommentsRentSchema extends EntityState<CommentItemType, string> {
  isLoading: boolean;
  error?: string;
}
