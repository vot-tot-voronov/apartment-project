import { RootStateType } from '@/app/providers/storeProvider';

export const getRentListDataSelector = (state: RootStateType) => state?.getRentListSlice?.data;
export const getRentListErrorSelector = (state: RootStateType) => state?.getRentListSlice?.error;
