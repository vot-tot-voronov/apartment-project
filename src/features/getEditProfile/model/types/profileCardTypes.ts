import { ProfileType } from '@/entities/Profile';

export interface IProfileCardSchema {
  data?: ProfileType;
  isLoading: boolean;
  error?: string;
  isReadonly: boolean;
}
