import { EntityState } from '@reduxjs/toolkit';

import { CommentItemType } from '@/entities/Comment';

export type CommentsResponseType = {
  userId: string;
  apartmentId: string;
} & CommentItemType;

export interface ICommentsRentSchema extends EntityState<CommentItemType, string> {
  isLoading: boolean;
  error?: string;
}
