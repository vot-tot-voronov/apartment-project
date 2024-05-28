import { RentListFilterFormEnum, RentListFilterFormType } from '../model/types/rentListFilterTypes';

import { ApartmentRonvationEnum, ApartmentTypeEnum } from '@/entities/Apartment';
import { RegExps } from '@/shared/constants';
import { masks } from '@/shared/lib';

export const defaultFormValues: RentListFilterFormType = {
  priceFrom: '',
  priceTo: '',
  fullAreaFrom: '',
  fullAreaTo: '',
  floorFrom: '',
  floorTo: '',
  floorsFrom: '',
  floorsTo: '',
  city: '',
  house: false,
  flat: false,
  oneRoom: false,
  twoRooms: false,
  threeRooms: false,
  fourPlusRooms: false,
  kitchenAreaSix: false,
  kitchenAreaSeven: false,
  kitchenAreaEight: false,
  kitchenAreaNine: false,
  kitchenAreaTen: false,
  kitchenAreaEleven: false,
  kitchenAreaTwelve: false,
  kitchenAreaThirteen: false,
  renovationEuro: false,
  renovationDesigner: false,
  renovationCosmetic: false,
  renovationNot: false,
};

enum QueryParamsKeysEnum {
  PRICE_GTE = 'pricePerMonth_gte',
  PRICE_LTE = 'pricePerMonth_lte',
  CITY = 'about.city',
  TYPE = 'about.type',
  ROOMS = 'about.rooms',
  ROOMS_GTE = 'about.rooms_gte',
  FULL_AREA_GTE = 'about.fullArea_gte',
  FULL_AREA_LTE = 'about.fullArea_lte',
  KITCHEN_AREA = 'about.kitchenArea',
  FLOOR_GTE = 'about.floor_gte',
  FLOOR_LTE = 'about.floor_lte',
  FLOORS_GTE = 'about.floors_gte',
  FLOORS_LTE = 'about.floors_lte',
  RENOVATION = 'about.renovation',
}

export const mapFilterToSearchParams = (data: RentListFilterFormType) => {
  const paramsArray = [
    [QueryParamsKeysEnum.PRICE_GTE, data?.priceFrom?.length ? masks.rubleMask().unmask(data.priceFrom) : undefined],
    [QueryParamsKeysEnum.PRICE_LTE, data?.priceTo?.length ? masks.rubleMask().unmask(data.priceTo) : undefined],
    [QueryParamsKeysEnum.CITY, data?.city?.length ? data.city : undefined],
    [QueryParamsKeysEnum.TYPE, data?.flat ? ApartmentTypeEnum.FLAT : undefined],
    [QueryParamsKeysEnum.TYPE, data?.house ? ApartmentTypeEnum.HOUSE : undefined],
    [QueryParamsKeysEnum.ROOMS, data?.oneRoom ? 1 : undefined],
    [QueryParamsKeysEnum.ROOMS, data?.twoRooms ? 2 : undefined],
    [QueryParamsKeysEnum.ROOMS, data?.threeRooms ? 3 : undefined],
    [QueryParamsKeysEnum.ROOMS_GTE, data?.fourPlusRooms ? 4 : undefined],
    [
      QueryParamsKeysEnum.FULL_AREA_GTE,
      data?.fullAreaFrom?.length ? masks.squareMetersMask().unmask(data.fullAreaFrom) : undefined,
    ],
    [
      QueryParamsKeysEnum.FULL_AREA_LTE,
      data?.fullAreaTo?.length ? masks.squareMetersMask().unmask(data.fullAreaTo) : undefined,
    ],
    [QueryParamsKeysEnum.KITCHEN_AREA, data?.kitchenAreaSix ? 6 : undefined],
    [QueryParamsKeysEnum.KITCHEN_AREA, data?.kitchenAreaSeven ? 7 : undefined],
    [QueryParamsKeysEnum.KITCHEN_AREA, data?.kitchenAreaEight ? 8 : undefined],
    [QueryParamsKeysEnum.KITCHEN_AREA, data?.kitchenAreaNine ? 9 : undefined],
    [QueryParamsKeysEnum.KITCHEN_AREA, data?.kitchenAreaTen ? 10 : undefined],
    [QueryParamsKeysEnum.KITCHEN_AREA, data?.kitchenAreaEleven ? 11 : undefined],
    [QueryParamsKeysEnum.KITCHEN_AREA, data?.kitchenAreaTwelve ? 12 : undefined],
    [QueryParamsKeysEnum.KITCHEN_AREA, data?.kitchenAreaThirteen ? 13 : undefined],
    [QueryParamsKeysEnum.FLOOR_GTE, data?.floorFrom?.length ? data.floorFrom : undefined],
    [QueryParamsKeysEnum.FLOOR_LTE, data?.floorTo?.length ? data.floorTo : undefined],
    [QueryParamsKeysEnum.FLOORS_GTE, data?.floorsFrom?.length ? data.floorsFrom : undefined],
    [QueryParamsKeysEnum.FLOORS_LTE, data?.floorsTo?.length ? data.floorsTo : undefined],
    [QueryParamsKeysEnum.RENOVATION, data?.renovationEuro ? ApartmentRonvationEnum.EURO : undefined],
    [QueryParamsKeysEnum.RENOVATION, data?.renovationDesigner ? ApartmentRonvationEnum.DESIGNER : undefined],
    [QueryParamsKeysEnum.RENOVATION, data?.renovationCosmetic ? ApartmentRonvationEnum.COSMETIC : undefined],
    [QueryParamsKeysEnum.RENOVATION, data?.renovationNot ? ApartmentRonvationEnum.NOT : undefined],
  ].filter(item => item[1] !== undefined);

  return paramsArray.map(item => item.join('=')).join('&');
};

export const queryParamsToFilter = (searchParams: URLSearchParams): RentListFilterFormType => {
  const queryArray = searchParams
    .toString()
    .split('&')
    .map(item => item.split('='));

  return queryArray.reduce(
    (currentData, [firstItem, secondItem]) => {
      if (firstItem === QueryParamsKeysEnum.PRICE_GTE) {
        return {
          ...currentData,
          [RentListFilterFormEnum.priceFrom]: RegExps.DIGITS.test(secondItem) ? masks.rubleMask().mask(secondItem) : '',
        };
      }

      if (firstItem === QueryParamsKeysEnum.PRICE_LTE) {
        return {
          ...currentData,
          [RentListFilterFormEnum.priceTo]: RegExps.DIGITS.test(secondItem) ? masks.rubleMask().mask(secondItem) : '',
        };
      }

      if (firstItem === QueryParamsKeysEnum.CITY) {
        return {
          ...currentData,
          [RentListFilterFormEnum.city]: secondItem.length ? decodeURIComponent(secondItem) : '',
        };
      }

      if (firstItem === QueryParamsKeysEnum.TYPE) {
        if (decodeURIComponent(secondItem) === ApartmentTypeEnum.FLAT) {
          return {
            ...currentData,
            [RentListFilterFormEnum.flat]: true,
          };
        }

        if (decodeURIComponent(secondItem) === ApartmentTypeEnum.HOUSE) {
          return {
            ...currentData,
            [RentListFilterFormEnum.house]: true,
          };
        }
      }

      if (firstItem === QueryParamsKeysEnum.ROOMS) {
        if (secondItem === '1') {
          return {
            ...currentData,
            [RentListFilterFormEnum.oneRoom]: true,
          };
        }

        if (secondItem === '2') {
          return {
            ...currentData,
            [RentListFilterFormEnum.twoRooms]: true,
          };
        }

        if (secondItem === '3') {
          return {
            ...currentData,
            [RentListFilterFormEnum.threeRooms]: true,
          };
        }
      }

      if (firstItem === QueryParamsKeysEnum.ROOMS_GTE) {
        if (secondItem === '4') {
          return {
            ...currentData,
            [RentListFilterFormEnum.fourPlusRooms]: true,
          };
        }
      }

      if (firstItem === QueryParamsKeysEnum.FULL_AREA_GTE) {
        return {
          ...currentData,
          [RentListFilterFormEnum.fullAreaFrom]: RegExps.DIGITS.test(secondItem)
            ? masks.squareMetersMask().mask(secondItem)
            : '',
        };
      }

      if (firstItem === QueryParamsKeysEnum.FULL_AREA_LTE) {
        return {
          ...currentData,
          [RentListFilterFormEnum.fullAreaTo]: RegExps.DIGITS.test(secondItem)
            ? masks.squareMetersMask().mask(secondItem)
            : '',
        };
      }

      if (firstItem === QueryParamsKeysEnum.KITCHEN_AREA) {
        if (secondItem === '6') {
          return {
            ...currentData,
            [RentListFilterFormEnum.kitchenAreaSix]: true,
          };
        }
        if (secondItem === '7') {
          return {
            ...currentData,
            [RentListFilterFormEnum.kitchenAreaSeven]: true,
          };
        }
        if (secondItem === '8') {
          return {
            ...currentData,
            [RentListFilterFormEnum.kitchenAreaEight]: true,
          };
        }
        if (secondItem === '9') {
          return {
            ...currentData,
            [RentListFilterFormEnum.kitchenAreaNine]: true,
          };
        }
        if (secondItem === '10') {
          return {
            ...currentData,
            [RentListFilterFormEnum.kitchenAreaTen]: true,
          };
        }
        if (secondItem === '11') {
          return {
            ...currentData,
            [RentListFilterFormEnum.kitchenAreaEleven]: true,
          };
        }
        if (secondItem === '12') {
          return {
            ...currentData,
            [RentListFilterFormEnum.kitchenAreaTwelve]: true,
          };
        }
        if (secondItem === '13') {
          return {
            ...currentData,
            [RentListFilterFormEnum.kitchenAreaThirteen]: true,
          };
        }
      }

      if (firstItem === QueryParamsKeysEnum.FLOOR_GTE) {
        return {
          ...currentData,
          [RentListFilterFormEnum.floorFrom]: RegExps.DIGITS.test(secondItem)
            ? masks.numberMask().mask(secondItem)
            : '',
        };
      }

      if (firstItem === QueryParamsKeysEnum.FLOOR_LTE) {
        return {
          ...currentData,
          [RentListFilterFormEnum.floorTo]: RegExps.DIGITS.test(secondItem) ? masks.numberMask().mask(secondItem) : '',
        };
      }

      if (firstItem === QueryParamsKeysEnum.FLOORS_GTE) {
        return {
          ...currentData,
          [RentListFilterFormEnum.floorsFrom]: RegExps.DIGITS.test(secondItem)
            ? masks.numberMask().mask(secondItem)
            : '',
        };
      }

      if (firstItem === QueryParamsKeysEnum.FLOORS_LTE) {
        return {
          ...currentData,
          [RentListFilterFormEnum.floorsTo]: RegExps.DIGITS.test(secondItem) ? masks.numberMask().mask(secondItem) : '',
        };
      }

      if (firstItem === QueryParamsKeysEnum.RENOVATION) {
        const decodedString = (value: string) => decodeURIComponent(value).replace('+', ' ');

        if (decodeURIComponent(secondItem) === ApartmentRonvationEnum.EURO) {
          return {
            ...currentData,
            [RentListFilterFormEnum.renovationEuro]: true,
          };
        }
        if (decodedString(secondItem) === ApartmentRonvationEnum.DESIGNER) {
          return {
            ...currentData,
            [RentListFilterFormEnum.renovationDesigner]: true,
          };
        }
        if (decodedString(secondItem) === ApartmentRonvationEnum.COSMETIC) {
          return {
            ...currentData,
            [RentListFilterFormEnum.renovationCosmetic]: true,
          };
        }
        if (decodedString(secondItem) === ApartmentRonvationEnum.NOT) {
          return {
            ...currentData,
            [RentListFilterFormEnum.renovationNot]: true,
          };
        }
      }

      return { ...currentData };
    },
    { ...defaultFormValues },
  );
};
