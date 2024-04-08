import { IStateSchema } from '@/app/providers/storeProvider';

export const getUserInited = (state: IStateSchema) => state.user._isInited;
