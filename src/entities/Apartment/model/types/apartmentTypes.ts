import { z } from 'zod';

const ListItemShcema = z.object({
  value: z.boolean(),
  label: z.string(),
});

export type ListItemType = z.infer<typeof ListItemShcema>;

enum ApartmentEnum {
  HOUSE = 'house',
  FLAT = 'flat',
}

const ConditionsAndFacilitiesSchema = z.object({
  conditions: z.array(ListItemShcema),
  facilities: z.array(ListItemShcema),
});

export type ConditionsAndFacilitiesType = z.infer<typeof ConditionsAndFacilitiesSchema>;

const ApartmentItemSchema = z.object({
  id: z.number(),
  images: z.array(z.string()),
  pricePerMonth: z.number(),
  views: z.number(),
  updated: z.string().regex(/^\d\d\d\d\.\d\d\.\d\d$/),
  description: z.string(),
  conditionsAndFacilities: ConditionsAndFacilitiesSchema,
  about: z.object({
    type: z.nativeEnum(ApartmentEnum),
    rooms: z.number(),
    builtYear: z.number(),
    adress: z.string(),
    fullArea: z.number(),
    livingArea: z.number(),
    floor: z.number().optional(),
    floors: z.number(),
    kitchenArea: z.number(),
    renovation: z.string(),
    balcony: z.string(),
    prepayment: z.boolean(),
    viewFromWindow: z.string(),
    garbageChute: z.boolean(),
  }),
});

export type ApartmentItemType = z.infer<typeof ApartmentItemSchema>;
