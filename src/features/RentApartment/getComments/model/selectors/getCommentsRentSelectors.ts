import { RootStateType } from '@/app/providers/storeProvider';

export const getCommentsRentData = (state: RootStateType) => state.getCommentsRentSlice?.data;
export const getCommentsRentError = (state: RootStateType) => state.getCommentsRentSlice?.error;
