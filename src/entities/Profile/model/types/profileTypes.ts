import { ISelectItem } from '@/shared/types';

export enum ProfileFieldsEnum {
  NAME = 'name',
  SURNAME = 'surname',
  MIDDLENAME = 'middleName',
  REGION = 'region',
  CITY = 'city',
  PHONE = 'phone',
}

export interface IProfileForm {
  name: string;
  surname: string;
  middleName?: string;
  region: ISelectItem;
  city: string;
  phone: string;
}
