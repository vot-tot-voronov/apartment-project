import { RootStateType } from '@/app/providers/storeProvider';

export const getUserData = (state: RootStateType) => state.user.authData;
