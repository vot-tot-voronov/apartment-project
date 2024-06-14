import { EntityState } from '@reduxjs/toolkit';

import { ApartmentItemType } from '@/entities/Apartment';
import { IPaginationSchema } from '@/shared/types';

export interface IRentListSchema extends EntityState<ApartmentItemType, string>, IPaginationSchema {
  isLoading: boolean;
  error?: string;
}
