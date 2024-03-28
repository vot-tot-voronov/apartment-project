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
  region: string;
  city: string;
  phone: string;
}
