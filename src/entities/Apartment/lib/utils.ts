import { IShortInfoProps } from '../ui/ShortInfo/ShortInfo';
import { ApartmentItemType } from '../model/types/apartmentTypes';

export const prepareShortInfoData = (data: ApartmentItemType): IShortInfoProps => ({
  fullArea: data.about.fullArea,
  livingArea: data.about.livingArea,
  floor: data.about?.floor,
  kitchenArea: data.about.kitchenArea,
  builtYear: data.about.builtYear,
  adress: data.about.adress,
  pricePerMonth: data.pricePerMonth,
  views: data.views,
  updated: data.updated,
});

export interface IShortInfoListMakerProps {
  fullArea: number;
  livingArea: number;
  floor?: number;
  kitchenArea: number;
  builtYear: number;
}

export const shortInfoListMaker = ({
  fullArea,
  livingArea,
  floor,
  kitchenArea,
  builtYear,
}: IShortInfoListMakerProps) => [
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
    value: floor,
  },
  {
    title: 'Год постройки',
    value: builtYear,
  },
];
