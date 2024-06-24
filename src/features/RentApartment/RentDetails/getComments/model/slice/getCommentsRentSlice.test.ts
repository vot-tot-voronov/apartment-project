import { mockedCommentRent, mockedCommentsRent } from '../constants';
import { getCommentsRent } from '../services/getCommentsRent';
import { ICommentsRentSchema } from '../types/commentsRentType';
import { getCommentsRentReducer } from './getCommentsRentSlice';

describe('getCommentsRentSlice.test', () => {
  test('get rent comments pending', () => {
    const state: DeepPartial<ICommentsRentSchema> = { error: 'old error', isLoading: false, ids: [], entities: {} };

    expect(getCommentsRentReducer(state as ICommentsRentSchema, getCommentsRent.pending('', ''))).toEqual({
      error: undefined,
      isLoading: true,
      ids: [],
      entities: {},
    });
  });

  test('get rent comments fulfilled', () => {
    const state: DeepPartial<ICommentsRentSchema> = { error: undefined, isLoading: true, ids: [], entities: {} };

    expect(
      getCommentsRentReducer(state as ICommentsRentSchema, getCommentsRent.fulfilled(mockedCommentsRent, '', '')),
    ).toEqual({
      error: undefined,
      isLoading: false,
      ids: ['1'],
      entities: {
        '1': {
          ...mockedCommentRent,
        },
      },
    });
  });

  test('get rent comments rejected', () => {
    const state: DeepPartial<ICommentsRentSchema> = { error: undefined, isLoading: true, ids: [], entities: {} };

    expect(
      getCommentsRentReducer(
        state as ICommentsRentSchema,
        getCommentsRent.rejected(null, '', '', 'При загрузке комментариев произошла ошибка'),
      ),
    ).toEqual({
      error: 'При загрузке комментариев произошла ошибка',
      isLoading: false,
      ids: [],
      entities: {},
    });
  });
});
