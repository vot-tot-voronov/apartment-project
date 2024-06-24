import { fetchProfileService } from '../services/fetchProfile/fetchProfileService';
import { IProfileCardSchema } from '../types/profileCardTypes';
import { profileCardActions, profileCardReducer } from './profileCardSlice';

import { ProfileType } from '@/entities/Profile';

const data: ProfileType = {
  id: '',
  name: '',
  surname: '',
  region: {
    value: '',
    label: '',
  },
  phone: '',
  city: '',
};

describe('profileCardSlice.test', () => {
  test('test set isLoading', () => {
    const state: DeepPartial<IProfileCardSchema> = { isReadonly: true };

    expect(profileCardReducer(state as IProfileCardSchema, profileCardActions.setIsReadonly(false))).toEqual({
      isReadonly: false,
    });
  });

  test('fetch profile data pending', () => {
    const state: DeepPartial<IProfileCardSchema> = { error: 'error', isLoading: false };

    expect(profileCardReducer(state as IProfileCardSchema, fetchProfileService.pending('', ''))).toEqual({
      error: undefined,
      isLoading: true,
    });
  });

  test('fetch profile data fulfilled', () => {
    const state: DeepPartial<IProfileCardSchema> = { error: undefined, isLoading: true };

    expect(profileCardReducer(state as IProfileCardSchema, fetchProfileService.fulfilled(data, '', ''))).toEqual({
      data,
      isLoading: false,
    });
  });

  test('fetch profile data rejected', () => {
    const state: DeepPartial<IProfileCardSchema> = { error: undefined, isLoading: true };

    expect(
      profileCardReducer(
        state as IProfileCardSchema,
        fetchProfileService.rejected(null, '', '', 'Ошибка получения данных профиля'),
      ),
    ).toEqual({ error: 'Ошибка получения данных профиля', isLoading: false });
  });
});
