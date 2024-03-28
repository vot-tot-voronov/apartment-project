import { IProfileForm } from '@/entities/Profile';

export interface IProfileCardSchema {
  data?: IProfileForm;
  isLoading: boolean;
  error?: string;
  isReadonly: boolean;
}
