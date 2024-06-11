import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useNavigate } from 'react-router-dom';
import { useEffect, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';

import classes from './FacilitiesForm.module.scss';
import {
  FacilitiesFormKeysEnum,
  FacilitiesFormType,
  FacilitiesFormSchema,
  AboutFormSchema,
} from '../../model/types/createNewApartmentTypes';
import { createNewApartmentActions, createNewApartmentSlice } from '../../model/slice/createNewApartmentSlice';
import { mapNewApartmentData } from '../../model/lib';
import { createNewApartment } from '../../model/service/createNewApartmentService';

import { getRouteNewRentApartment, getRouteRentList } from '@/shared/config/routeConfig/routeConfig';
import { useAppDispatch } from '@/shared/hooks';
import { rootReducer } from '@/app/providers/storeProvider';
import { Button, ButtonThemeEnum, Checkbox, Container, FieldWithLabel, Form } from '@/shared/ui';

export const FacilitiesForm = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const {
    selectors: { getAboutFormData, getConditionsFormData, getFacilitiesFormData, getIsLoading, getError },
  } = useMemo(() => {
    return createNewApartmentSlice.injectInto(rootReducer);
  }, []);

  const aboutFormData = useSelector(getAboutFormData);
  const conditionsFormData = useSelector(getConditionsFormData);
  const facilitiesFormData = useSelector(getFacilitiesFormData);
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  const { control, handleSubmit } = useForm<FacilitiesFormType>({
    resolver: zodResolver(FacilitiesFormSchema),
    mode: 'onChange',
    defaultValues: { ...facilitiesFormData },
  });

  const onSubmit: SubmitHandler<FacilitiesFormType> = async data => {
    dispatch(createNewApartmentActions.setFacilitiesFormData(data));
    const mappedData = mapNewApartmentData({
      aboutForm: { ...aboutFormData },
      conditionsForm: { ...conditionsFormData },
      facilitiesForm: { ...data },
    });
    const result = await dispatch(createNewApartment(mappedData));
    if (result.meta.requestStatus === 'fulfilled') {
      navigate(getRouteRentList());
    }
    if (result.meta.requestStatus === 'rejected') {
      toast.error(error);
    }
  };

  const handleGoBack = () => navigate(getRouteNewRentApartment('CONDITIONS'));

  useEffect(() => {
    if (!AboutFormSchema.safeParse(aboutFormData).success) {
      navigate(getRouteNewRentApartment('ABOUT'), { replace: true });
    }
  }, [navigate, aboutFormData]);

  return (
    <Container className={classes.container}>
      <h2 className={classes.title}>Удобства в апартаментах</h2>
      <Form onSubmit={handleSubmit(onSubmit)} className={classes.form}>
        <FieldWithLabel fontSize="main" label="Мебель на кухне" className={classes.fieldBox}>
          <Checkbox
            isDisabled={isLoading}
            name={FacilitiesFormKeysEnum.kitchenFurniture}
            control={control}
            labelText="Есть"
          />
        </FieldWithLabel>
        <FieldWithLabel fontSize="main" label="Мебель в комнатах" className={classes.fieldBox}>
          <Checkbox
            isDisabled={isLoading}
            name={FacilitiesFormKeysEnum.roomsFurniture}
            control={control}
            labelText="Есть"
          />
        </FieldWithLabel>
        <FieldWithLabel fontSize="main" label="Стиральная машина" className={classes.fieldBox}>
          <Checkbox
            isDisabled={isLoading}
            name={FacilitiesFormKeysEnum.washingMachine}
            control={control}
            labelText="Есть"
          />
        </FieldWithLabel>
        <FieldWithLabel fontSize="main" label="Холодильник" className={classes.fieldBox}>
          <Checkbox
            isDisabled={isLoading}
            name={FacilitiesFormKeysEnum.refrigerator}
            control={control}
            labelText="Есть"
          />
        </FieldWithLabel>
        <FieldWithLabel fontSize="main" label="Интернет" className={classes.fieldBox}>
          <Checkbox isDisabled={isLoading} name={FacilitiesFormKeysEnum.internet} control={control} labelText="Есть" />
        </FieldWithLabel>
        <FieldWithLabel fontSize="main" label="Кондиционер" className={classes.fieldBox}>
          <Checkbox
            isDisabled={isLoading}
            name={FacilitiesFormKeysEnum.conditioner}
            control={control}
            labelText="Есть"
          />
        </FieldWithLabel>
      </Form>
      <div className={classes.btnContainer}>
        <Button
          isDisabled={isLoading}
          theme={ButtonThemeEnum.SECONDARY}
          onClick={handleGoBack}
          className={classes.button}
        >
          Назад
        </Button>
        <Button isDisabled={isLoading} onClick={handleSubmit(onSubmit)} className={classes.button}>
          Добавить
        </Button>
      </div>
    </Container>
  );
};
