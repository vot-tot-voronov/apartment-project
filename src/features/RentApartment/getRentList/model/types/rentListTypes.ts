import { ApartmentItemType } from '@/entities/Apartment';

export interface IRentListSchema {
  data?: Array<ApartmentItemType>;
  isLoading: boolean;
  error?: string;
}
