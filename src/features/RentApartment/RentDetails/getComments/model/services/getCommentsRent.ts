import { createAsyncThunk } from '@reduxjs/toolkit';

import { CommentsResponseType } from '../types/commentsRentType';

import { IThunkConfig } from '@/app/providers/storeProvider';
import { CommentItemType } from '@/entities/Comment';

export const getCommentsRent = createAsyncThunk<Array<CommentItemType>, string, IThunkConfig<string>>(
  'rent/getCommentsRent',
  async (apartmentId, { rejectWithValue, extra: { api } }) => {
    try {
      const response = await api.get<Array<CommentsResponseType>>('/comments', {
        params: {
          apartmentId,
          _expand: 'user',
        },
      });

      if (!response.data) {
        throw new Error();
      }

      return response.data.map(({ id, text, user }) => ({ id, text, user }));
    } catch (error) {
      return rejectWithValue('При загрузке комментариев произошла ошибка');
    }
  },
);
