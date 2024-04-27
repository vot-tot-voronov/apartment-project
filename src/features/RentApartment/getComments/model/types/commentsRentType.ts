import { CommentItemType } from '@/entities/Comment';

export interface ICommentsRentSchema {
  data?: Array<CommentItemType>;
  isLoading: boolean;
  error?: string;
}
