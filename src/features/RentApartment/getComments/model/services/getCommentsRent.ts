import { createAsyncThunk } from '@reduxjs/toolkit';

import { IThunkConfig } from '@/app/providers/storeProvider';
import { CommentItemType } from '@/entities/Comment';

export const getCommentsRent = createAsyncThunk<Array<CommentItemType>, string, IThunkConfig<string>>(
  'rent/getCommentsRent',
  async (apartmentId, { rejectWithValue, extra: { api } }) => {
    try {
      const response = await api.get<Array<CommentItemType>>('/comments', {
        params: {
          apartmentId,
          _expand: 'user',
        },
      });

      if (!response.data) {
        throw new Error();
      }

      return response.data;
    } catch (error) {
      return rejectWithValue('При загрузке комментариев произошла ошибка');
    }
  },
);
