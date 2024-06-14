import {
  AboutInfoIconsEnum,
  ApartmentAboutType,
  ApartmentItemType,
  ApartmentShortInfoType,
  ShortInfoDataType,
  IAboutListData,
} from '../model/types/apartmentTypes';

import { getNoun } from '@/shared/lib';

export const prepareShortInfoData = (data: ApartmentItemType): ShortInfoDataType => ({
  fullArea: data.about.fullArea,
  livingArea: data.about.livingArea,
  floor: data.about?.floor,
  floors: data.about.floors,
  kitchenArea: data.about.kitchenArea,
  builtYear: data.about.builtYear,
  adress: data.about.adress,
  pricePerMonth: data.pricePerMonth,
  views: data.views,
  updated: data.updated,
});

export const shortInfoListMaker = ({
  fullArea,
  livingArea,
  floor,
  kitchenArea,
  builtYear,
  floors,
}: ApartmentShortInfoType) => [
  {
    title: 'Площадь',
    value: `${fullArea} м²`,
  },
  {
    title: 'Жилая',
    value: `${livingArea} м²`,
  },
  {
    title: 'Кухня',
    value: `${kitchenArea} м²`,
  },
  {
    title: floor !== undefined ? 'Этаж' : getNoun(floors, 'Этаж', 'Этажа', 'Этажей'),
    value: floor !== undefined ? `${floor} из ${floors}` : `${floors}`,
  },
  {
    title: 'Год постройки',
    value: builtYear,
  },
];

export const getDataInfoList = (data: ApartmentAboutType): Array<Required<IAboutListData>> => {
  const listInfoData: Array<IAboutListData> = [
    {
      icon: AboutInfoIconsEnum.ROOMS,
      label: 'Комнат',
      value: data.rooms,
    },
    {
      icon: AboutInfoIconsEnum.BUILT_YEAR,
      label: 'Год постройки',
      value: data.builtYear,
    },
    {
      icon: AboutInfoIconsEnum.FULL_AREA,
      label: 'Площадь',
      value: `${data.fullArea} м²`,
    },
    {
      icon: AboutInfoIconsEnum.LIVING_AREA,
      label: 'Жилая площадь',
      value: `${data.livingArea} м²`,
    },
    {
      icon: AboutInfoIconsEnum.KITCHEN_AREA,
      label: 'Площадь кухни',
      value: `${data.kitchenArea} м²`,
    },
    {
      icon: AboutInfoIconsEnum.FLOOR,
      label: 'Этаж',
      value: data?.floor,
    },
    {
      icon: AboutInfoIconsEnum.FLOORS,
      label: 'Этажей',
      value: data.floors,
    },
    {
      icon: AboutInfoIconsEnum.RENOVATION,
      label: 'Ремонт',
      value: data.renovation,
    },
    {
      icon: AboutInfoIconsEnum.BALCONY,
      label: 'Балкон',
      value: data.balcony,
    },
    {
      icon: AboutInfoIconsEnum.PREPAYMENT,
      label: 'Предоплата',
      value: data.prepayment,
    },
    {
      icon: AboutInfoIconsEnum.VIEW_FROM_WINDOW,
      label: 'Вид из окна',
      value: data.viewFromWindow,
    },
    {
      icon: AboutInfoIconsEnum.GARBAGE_CHUTE,
      label: 'Мусоропровод',
      value: data.garbageChute ? 'Да' : 'Нет',
    },
  ];

  return listInfoData.filter((item): item is Required<IAboutListData> => item?.value !== undefined);
};
