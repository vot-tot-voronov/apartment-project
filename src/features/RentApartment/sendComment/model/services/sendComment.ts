import { createAsyncThunk } from '@reduxjs/toolkit';

import { IThunkConfig } from '@/app/providers/storeProvider';
import { CommentItemType } from '@/entities/Comment';
import { getUserData } from '@/entities/User';
import { getRentApartmentData } from '@/features/RentApartment/getRentApartment';
import { getCommentsRent } from '@/features/RentApartment/getComments';

export const sendComment = createAsyncThunk<CommentItemType, string, IThunkConfig<string>>(
  'sendComment',
  async (text, { extra: { api }, rejectWithValue, getState, dispatch }) => {
    const userData = getUserData(getState());
    const apartmentRentData = getRentApartmentData(getState());

    if (!userData || !text || !apartmentRentData) {
      return rejectWithValue('При отправке комментария произошла ошибка');
    }

    try {
      const response = await api.post<CommentItemType>('/comments', {
        apartmentId: apartmentRentData.id,
        userId: userData.id,
        text,
      });

      if (!response.data) {
        throw new Error();
      }

      dispatch(getCommentsRent(apartmentRentData.id));

      return response.data;
    } catch (error) {
      return rejectWithValue('При отправке комментария произошла ошибка');
    }
  },
);
