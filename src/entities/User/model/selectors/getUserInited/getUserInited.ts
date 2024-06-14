import { RootStateType } from '@/app/providers/storeProvider';

export const getUserInited = (state: RootStateType) => state.user._isInited;
