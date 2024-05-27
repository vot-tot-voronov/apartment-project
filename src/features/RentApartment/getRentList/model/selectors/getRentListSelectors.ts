import { RootStateType } from '@/app/providers/storeProvider';

export const getRentListErrorSelector = (state: RootStateType) => state?.getRentListSlice?.error;
export const getRentListPageCount = (state: RootStateType) => state?.getRentListSlice?.page || 1;
export const getRentListPageLimit = (state: RootStateType) => state?.getRentListSlice?.limit || 6;
export const getRentListPageHasMore = (state: RootStateType) => state?.getRentListSlice?.hasMore;
export const getIsLoadingRentList = (state: RootStateType) => state?.getRentListSlice?.isLoading || false;
