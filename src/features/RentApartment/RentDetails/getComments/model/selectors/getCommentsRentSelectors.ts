import { RootStateType } from '@/app/providers/storeProvider';

export const getCommentsRentError = (state: RootStateType) => state.getCommentsRentSlice?.error;
