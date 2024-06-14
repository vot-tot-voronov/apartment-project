import { RootStateType } from '@/app/providers/storeProvider';

export const getRentApartmentData = (state: RootStateType) => state.getRentApartmentSlice?.data;
export const getRentApartmentError = (state: RootStateType) => state.getRentApartmentSlice?.error;
