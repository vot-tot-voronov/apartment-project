import {
  AboutFormType,
  ConditionsFormType,
  FacilitiesFormType,
  SelectItemApartmentType,
  SelectItemRenovationType,
} from '../types/createNewApartmentTypes';

import { ApartmentRonvationEnum, ApartmentTypeEnum } from '@/entities/Apartment';

export const defaultAboutFormValues: AboutFormType = {
  type: null,
  description: '',
  fullArea: '',
  livingArea: '',
  kitchenArea: '',
  floor: '',
  floors: '',
  pricePerMonth: '',
  prepayment: '',
  builtYear: '',
  rooms: '',
  city: '',
  adress: '',
  renovation: null,
  balcony: false,
  viewFromWindow: '',
  garbageChute: false,
};

export const defaultConditionsFormValues: ConditionsFormType = {
  children: false,
  pets: false,
};

export const defaultFacilitiesFormValues: FacilitiesFormType = {
  kitchenFurniture: false,
  roomsFurniture: false,
  washingMachine: false,
  refrigerator: false,
  internet: false,
  conditioner: false,
};

export const typeOptions: Array<SelectItemApartmentType> = [
  {
    label: 'Дом',
    value: ApartmentTypeEnum.HOUSE,
  },
  {
    label: 'Квартира',
    value: ApartmentTypeEnum.FLAT,
  },
];

export const renovationOptions: Array<SelectItemRenovationType> = [
  {
    label: ApartmentRonvationEnum.COSMETIC,
    value: ApartmentRonvationEnum.COSMETIC,
  },
  {
    label: ApartmentRonvationEnum.DESIGNER,
    value: ApartmentRonvationEnum.DESIGNER,
  },
  {
    label: ApartmentRonvationEnum.EURO,
    value: ApartmentRonvationEnum.EURO,
  },
  {
    label: ApartmentRonvationEnum.NOT,
    value: ApartmentRonvationEnum.NOT,
  },
];
