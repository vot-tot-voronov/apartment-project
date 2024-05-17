import { ProfileFormType, ProfileType } from '@/entities/Profile';
import { masks } from '@/shared/lib';

export const prepareProfileFormData = (data?: ProfileType): ProfileFormType | undefined => {
  if (data === undefined) {
    return undefined;
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { id: _, ...newDataForm } = data;

  return {
    ...newDataForm,
    phone: masks.phoneMask.mask(newDataForm.phone),
  };
};
