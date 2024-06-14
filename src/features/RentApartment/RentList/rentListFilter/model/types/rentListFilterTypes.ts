import { z } from 'zod';

import { ErrorMessagesEnum, RegExps } from '@/shared/constants';

export const RentListFilterFormSchema = z.object({
  priceFrom: z.string().optional(),
  priceTo: z.string().optional(),
  city: z
    .union([
      z.string().regex(RegExps.RUSSIAN_ALPHABET_WITH_DASH, { message: ErrorMessagesEnum.RUSSIAN_ALPHABET }),
      z.string().length(0),
    ])
    .optional()
    .transform(e => (e === '' ? undefined : e)),
  house: z.boolean().optional(),
  flat: z.boolean().optional(),
  oneRoom: z.boolean().optional(),
  twoRooms: z.boolean().optional(),
  threeRooms: z.boolean().optional(),
  fourPlusRooms: z.boolean().optional(),
  fullAreaFrom: z.string().optional(),
  fullAreaTo: z.string().optional(),
  kitchenAreaSix: z.boolean().optional(),
  kitchenAreaSeven: z.boolean().optional(),
  kitchenAreaEight: z.boolean().optional(),
  kitchenAreaNine: z.boolean().optional(),
  kitchenAreaTen: z.boolean().optional(),
  kitchenAreaEleven: z.boolean().optional(),
  kitchenAreaTwelve: z.boolean().optional(),
  kitchenAreaThirteen: z.boolean().optional(),
  floorFrom: z.string().optional(),
  floorTo: z.string().optional(),
  floorsFrom: z.string().optional(),
  floorsTo: z.string().optional(),
  renovationEuro: z.boolean().optional(),
  renovationDesigner: z.boolean().optional(),
  renovationCosmetic: z.boolean().optional(),
  renovationNot: z.boolean().optional(),
});

export const RentListFilterFormEnum = RentListFilterFormSchema.keyof().Enum;
export type RentListFilterFormType = z.infer<typeof RentListFilterFormSchema>;
