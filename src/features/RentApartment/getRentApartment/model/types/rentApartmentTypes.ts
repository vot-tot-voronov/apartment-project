import { ApartmentItemType } from '@/entities/Apartment';

export interface IRentApartmentSchema {
  data?: ApartmentItemType;
  isLoading: boolean;
  error?: string;
}
