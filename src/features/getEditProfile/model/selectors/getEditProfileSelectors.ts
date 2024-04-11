import { RootStateType } from '@/app/providers/storeProvider';

export const getEditProfiletData = (state: RootStateType) => state.profileCard?.data;
export const getEditProfileError = (state: RootStateType) => state.profileCard?.error;
