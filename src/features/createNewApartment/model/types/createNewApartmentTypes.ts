import { z } from 'zod';

import { ErrorMessagesEnum, RegExps } from '@/shared/constants';
import { SelectItemSchemaGeneric } from '@/shared/types';
import { ApartmentItemType, ApartmentRonvationEnum, ApartmentTypeEnum } from '@/entities/Apartment';

const SelectItemApartmentTypeSchema = SelectItemSchemaGeneric(z.nativeEnum(ApartmentTypeEnum));
export type SelectItemApartmentType = z.infer<typeof SelectItemApartmentTypeSchema>;

const SelectItemRenovationSchema = SelectItemSchemaGeneric(z.nativeEnum(ApartmentRonvationEnum));
export type SelectItemRenovationType = z.infer<typeof SelectItemRenovationSchema>;

export const AboutFormSchema = z.object({
  type: SelectItemApartmentTypeSchema.nullable().transform((value, ctx) => {
    if (value === null) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: ErrorMessagesEnum.REQUIRED,
      });
    }

    return value;
  }),
  description: z.string({ required_error: ErrorMessagesEnum.REQUIRED }).min(1, { message: ErrorMessagesEnum.REQUIRED }),
  fullArea: z
    .string({ required_error: ErrorMessagesEnum.REQUIRED })
    .regex(RegExps.DIGITS, { message: ErrorMessagesEnum.DIGITS }),
  livingArea: z
    .string({ required_error: ErrorMessagesEnum.REQUIRED })
    .regex(RegExps.DIGITS, { message: ErrorMessagesEnum.DIGITS }),
  kitchenArea: z
    .string({ required_error: ErrorMessagesEnum.REQUIRED })
    .regex(RegExps.DIGITS, { message: ErrorMessagesEnum.DIGITS }),
  floor: z
    .string({ required_error: ErrorMessagesEnum.REQUIRED })
    .regex(RegExps.DIGITS, { message: ErrorMessagesEnum.DIGITS })
    .optional()
    .or(z.literal('')),
  floors: z
    .string({ required_error: ErrorMessagesEnum.REQUIRED })
    .regex(RegExps.DIGITS, { message: ErrorMessagesEnum.DIGITS }),
  pricePerMonth: z
    .string({ required_error: ErrorMessagesEnum.REQUIRED })
    .regex(RegExps.DIGITS, { message: ErrorMessagesEnum.DIGITS }),
  prepayment: z.string({ required_error: ErrorMessagesEnum.REQUIRED }).min(1, { message: ErrorMessagesEnum.REQUIRED }),
  builtYear: z
    .string({ required_error: ErrorMessagesEnum.REQUIRED })
    .regex(RegExps.DIGITS, { message: ErrorMessagesEnum.DIGITS }),
  rooms: z
    .string({ required_error: ErrorMessagesEnum.REQUIRED })
    .regex(RegExps.DIGITS, { message: ErrorMessagesEnum.DIGITS }),
  city: z.string({ required_error: ErrorMessagesEnum.REQUIRED }).min(1, { message: ErrorMessagesEnum.REQUIRED }),
  adress: z.string({ required_error: ErrorMessagesEnum.REQUIRED }).min(1, { message: ErrorMessagesEnum.REQUIRED }),
  renovation: SelectItemRenovationSchema.nullable().transform((value, ctx) => {
    if (value === null) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: ErrorMessagesEnum.REQUIRED,
      });

      return null;
    }

    return value;
  }),
  balcony: z.boolean({ required_error: ErrorMessagesEnum.REQUIRED }),
  viewFromWindow: z
    .string({ required_error: ErrorMessagesEnum.REQUIRED })
    .min(1, { message: ErrorMessagesEnum.REQUIRED }),
  garbageChute: z.boolean({ required_error: ErrorMessagesEnum.REQUIRED }),
});

export const AboutFormKeysEnum = AboutFormSchema.keyof().Enum;
export type AboutFormType = z.infer<typeof AboutFormSchema>;

export const ConditionsFormSchema = z.object({
  children: z.boolean({ required_error: ErrorMessagesEnum.REQUIRED }),
  pets: z.boolean({ required_error: ErrorMessagesEnum.REQUIRED }),
});

export const ConditionsFormKeysEnum = ConditionsFormSchema.keyof().Enum;
export type ConditionsFormType = z.infer<typeof ConditionsFormSchema>;

export const FacilitiesFormSchema = z.object({
  kitchenFurniture: z.boolean({ required_error: ErrorMessagesEnum.REQUIRED }),
  roomsFurniture: z.boolean({ required_error: ErrorMessagesEnum.REQUIRED }),
  washingMachine: z.boolean({ required_error: ErrorMessagesEnum.REQUIRED }),
  refrigerator: z.boolean({ required_error: ErrorMessagesEnum.REQUIRED }),
  internet: z.boolean({ required_error: ErrorMessagesEnum.REQUIRED }),
  conditioner: z.boolean({ required_error: ErrorMessagesEnum.REQUIRED }),
});

export const FacilitiesFormKeysEnum = FacilitiesFormSchema.keyof().Enum;
export type FacilitiesFormType = z.infer<typeof FacilitiesFormSchema>;

export interface ICreateNewApartmentSchema {
  aboutForm: AboutFormType;
  conditionsForm: ConditionsFormType;
  facilitiesForm: FacilitiesFormType;
  canStepToConditions: boolean;
  canStepToFacilities: boolean;
  isLoading: boolean;
  error?: string;
}

export type NewApartmentType = Omit<ApartmentItemType, 'id'>;
