import {
  AboutFormType,
  ConditionsFormType,
  FacilitiesFormType,
  NewApartmentType,
} from '../types/createNewApartmentTypes';

import { ApartmentRonvationEnum, ApartmentTypeEnum } from '@/entities/Apartment';

interface INewApartmentData {
  aboutForm: AboutFormType;
  conditionsForm: ConditionsFormType;
  facilitiesForm: FacilitiesFormType;
}

const getCurrentDate = () => {
  const currentDate = new Date();
  let month = `${currentDate.getMonth() + 1}`;
  let day = `${currentDate.getDate()}`;
  const year = currentDate.getFullYear();

  if (month.length < 2) month = `0${month}`;
  if (day.length < 2) day = `0${day}`;

  return [year, month, day].join('.');
};

function getRandomNumber(min: number, max: number) {
  return Math.floor(Math.random() * (max - min) + min);
}

export const mapNewApartmentData = ({
  aboutForm,
  conditionsForm,
  facilitiesForm,
}: INewApartmentData): NewApartmentType => {
  return {
    images: [`/images/apt${getRandomNumber(1, 4)}.jpg`, `/images/apt${getRandomNumber(1, 4)}.jpg`],
    views: getRandomNumber(10, 150),
    updated: getCurrentDate(),
    pricePerMonth: Number(aboutForm.pricePerMonth),
    description: aboutForm.description,
    conditionsAndFacilities: {
      conditions: [
        {
          value: conditionsForm.children,
          label: conditionsForm.children ? 'Можно с детьми' : 'Нельзя с детьми',
        },
        {
          value: conditionsForm.pets,
          label: conditionsForm.pets ? 'Можно с животными' : 'Нельзя с животными',
        },
      ],
      facilities: [
        {
          value: facilitiesForm.kitchenFurniture,
          label: 'Мебель на кухне',
        },
        {
          value: facilitiesForm.roomsFurniture,
          label: 'Мебель в комнатах',
        },
        {
          value: facilitiesForm.washingMachine,
          label: 'Стиральная машина',
        },
        {
          value: facilitiesForm.refrigerator,
          label: 'Холодильник',
        },
        {
          value: facilitiesForm.internet,
          label: 'Интернет',
        },
        {
          value: facilitiesForm.conditioner,
          label: 'Кондиционер',
        },
      ],
    },
    about: {
      type: aboutForm.type?.value as ApartmentTypeEnum,
      rooms: Number(aboutForm.rooms),
      builtYear: Number(aboutForm.builtYear),
      city: aboutForm.city,
      adress: aboutForm.adress,
      fullArea: Number(aboutForm.fullArea),
      livingArea: Number(aboutForm.livingArea),
      floor: aboutForm.floor?.length ? Number(aboutForm.floor) : undefined,
      floors: Number(aboutForm.floors),
      kitchenArea: Number(aboutForm.kitchenArea),
      renovation: aboutForm.renovation?.value as ApartmentRonvationEnum,
      balcony: aboutForm.balcony ? 'Есть' : 'Отсутствует',
      prepayment: aboutForm.prepayment,
      viewFromWindow: aboutForm.viewFromWindow,
      garbageChute: aboutForm.garbageChute,
    },
  };
};
