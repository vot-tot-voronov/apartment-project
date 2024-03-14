import { IStateSchema } from '@/app/providers/storeProvider';

export const getUserData = (state: IStateSchema) => state.user.authData;
