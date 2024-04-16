import { ApartmentItemType } from '../model/types/apartmentTypes';

export type ShortInfoListMakerType = {
  fullArea: number;
  livingArea: number;
  floor?: number;
  floors: number;
  kitchenArea: number;
  builtYear: number;
};

type PreparedShortInfoDataType = {
  adress: string;
  pricePerMonth: number;
  views: number;
  updated: string;
} & ShortInfoListMakerType;

export const prepareShortInfoData = (data: ApartmentItemType): PreparedShortInfoDataType => ({
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
}: ShortInfoListMakerType) => [
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
    title: 'Этаж',
    value: `${floor} из ${floors}`,
  },
  {
    title: 'Год постройки',
    value: builtYear,
  },
];
