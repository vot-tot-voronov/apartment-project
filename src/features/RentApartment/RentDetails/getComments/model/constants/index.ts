import { CommentsResponseType } from '../types/commentsRentType';

import { CommentItemType } from '@/entities/Comment';

export const mockedCommentsRentResponse: Array<CommentsResponseType> = [
  {
    userId: '',
    apartmentId: '',
    text: '',
    id: '1',
    user: {
      id: '',
      username: '',
    },
  },
];

export const mockedCommentRent: CommentItemType = {
  text: '',
  id: '1',
  user: {
    id: '',
    username: '',
  },
};

export const mockedCommentsRent: Array<CommentItemType> = [
  {
    text: '',
    id: '1',
    user: {
      id: '',
      username: '',
    },
  },
];
