import { ProfileFormType } from '@/entities/Profile';

export interface IProfileCardSchema {
  data?: ProfileFormType;
  isLoading: boolean;
  error?: string;
  isReadonly: boolean;
}
