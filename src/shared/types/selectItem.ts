import { z } from 'zod';

export const SelectItemSchemaGeneric = <T extends z.ZodTypeAny>(valueSchema: T) => {
  return z.object({
    value: valueSchema,
    label: z.string(),
  });
};

export const SelectItemStringSchema = SelectItemSchemaGeneric(z.string());

export type SelectItemStringType = z.infer<typeof SelectItemStringSchema>;
