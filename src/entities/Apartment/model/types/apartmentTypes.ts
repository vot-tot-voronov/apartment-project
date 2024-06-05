import { z } from 'zod';

const ListItemShcema = z.object({
  value: z.boolean(),
  label: z.string(),
});

export type ListItemType = z.infer<typeof ListItemShcema>;

export enum ApartmentTypeEnum {
  HOUSE = 'house',
  FLAT = 'flat',
}

export enum ApartmentRonvationEnum {
  EURO = 'Евроремонт',
  DESIGNER = 'Дизайнерский проект',
  COSMETIC = 'Косметический ремонт',
  NOT = 'Без ремонта',
}

const ApartmentShortInfoSchema = z.object({
  fullArea: z.number(),
  livingArea: z.number(),
  floor: z.number().optional(),
  floors: z.number(),
  kitchenArea: z.number(),
  builtYear: z.number(),
});

export type ApartmentShortInfoType = z.infer<typeof ApartmentShortInfoSchema>;

export type ShortInfoDataType = {
  adress: string;
  pricePerMonth: number;
  views: number;
  updated: string;
} & ApartmentShortInfoType;

export enum AboutInfoIconsEnum {
  ROOMS,
  BUILT_YEAR,
  ADRESS,
  FULL_AREA,
  LIVING_AREA,
  FLOOR,
  FLOORS,
  KITCHEN_AREA,
  RENOVATION,
  BALCONY,
  PREPAYMENT,
  VIEW_FROM_WINDOW,
  GARBAGE_CHUTE,
}

export const ApartmentAboutSchema = ApartmentShortInfoSchema.extend({
  type: z.nativeEnum(ApartmentTypeEnum),
  rooms: z.number(),
  city: z.string(),
  adress: z.string(),
  renovation: z.nativeEnum(ApartmentRonvationEnum),
  balcony: z.string(),
  prepayment: z.string(),
  viewFromWindow: z.string(),
  garbageChute: z.boolean(),
});

export type ApartmentAboutType = z.infer<typeof ApartmentAboutSchema>;

export interface IAboutListData {
  icon: AboutInfoIconsEnum;
  label: string;
  value?: number | string;
}

const ConditionsAndFacilitiesSchema = z.object({
  conditions: z.array(ListItemShcema),
  facilities: z.array(ListItemShcema),
});

export type ConditionsAndFacilitiesType = z.infer<typeof ConditionsAndFacilitiesSchema>;

export const ApartmentItemSchema = z.object({
  id: z.string(),
  images: z.array(z.string()),
  pricePerMonth: z.number(),
  views: z.number(),
  updated: z.string().regex(/^\d\d\d\d\.\d\d\.\d\d$/),
  description: z.string(),
  conditionsAndFacilities: ConditionsAndFacilitiesSchema,
  about: ApartmentAboutSchema,
});

export type ApartmentItemType = z.infer<typeof ApartmentItemSchema>;
