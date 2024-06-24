import {
  AboutFormType,
  ConditionsFormType,
  FacilitiesFormType,
  NewApartmentType,
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

export const mockedNewApartment: NewApartmentType = {
  images: ['/images/apt1.jpg', '/images/apt2.jpg', '/images/apt3.jpg'],
  pricePerMonth: 20000,
  views: 42,
  updated: '12.03.2024',
  description: '',
  conditionsAndFacilities: {
    conditions: [
      {
        value: true,
        label: 'Можно с детьми',
      },
      {
        value: false,
        label: 'Нельзя с животными',
      },
    ],
    facilities: [
      {
        value: true,
        label: 'Мебель на кухне',
      },
      {
        value: true,
        label: 'Мебель в комнатах',
      },
      {
        value: false,
        label: 'Стиральная машина',
      },
      {
        value: true,
        label: 'Холодильник',
      },
      {
        value: true,
        label: 'Интернет',
      },
      {
        value: false,
        label: 'Кондиционер',
      },
    ],
  },
  about: {
    type: ApartmentTypeEnum.HOUSE,
    rooms: 3,
    builtYear: 1994,
    city: 'Москва',
    adress: 'г. Москва, Рублёвское шоссе, дом. 1532, подъезд 1',
    fullArea: 72,
    livingArea: 65,
    floors: 2,
    kitchenArea: 10,
    renovation: ApartmentRonvationEnum.DESIGNER,
    balcony: 'Есть',
    prepayment: 'За три месяца вперед',
    viewFromWindow: 'На море и во двор',
    garbageChute: true,
  },
};
