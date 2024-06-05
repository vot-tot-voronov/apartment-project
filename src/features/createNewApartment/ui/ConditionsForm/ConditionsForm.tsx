import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useNavigate } from 'react-router-dom';
import { useEffect, useMemo } from 'react';
import { useSelector } from 'react-redux';

import classes from './ConditionsForm.module.scss';
import {
  ConditionsFormKeysEnum,
  ConditionsFormSchema,
  ConditionsFormType,
} from '../../model/types/createNewApartmentTypes';
import { createNewApartmentActions, createNewApartmentSlice } from '../../model/slice/createNewApartmentSlice';

import { getRouteNewRentApartment } from '@/shared/config/routeConfig/routeConfig';
import { useAppDispatch } from '@/shared/hooks';
import { rootReducer } from '@/app/providers/storeProvider';
import { Button, ButtonThemeEnum, Checkbox, Container, FieldWithLabel, Form } from '@/shared/ui';

export const ConditionsForm = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const {
    selectors: { getConditionsFormData, getIsLoading },
  } = useMemo(() => {
    return createNewApartmentSlice.injectInto(rootReducer);
  }, []);

  const conditionsFormData = useSelector(getConditionsFormData);
  const isLoading = useSelector(getIsLoading);

  const { control, handleSubmit } = useForm<ConditionsFormType>({
    resolver: zodResolver(ConditionsFormSchema),
    mode: 'onChange',
    defaultValues: { ...conditionsFormData },
  });

  const onSubmit: SubmitHandler<ConditionsFormType> = async data => {
    dispatch(createNewApartmentActions.setConditionsFormData(data));
    dispatch(createNewApartmentActions.setCanStepToFacilities(true));
    navigate(getRouteNewRentApartment('FACILITIES'));
  };

  const handleGoBack = () => navigate(getRouteNewRentApartment('ABOUT'));

  useEffect(() => {
    dispatch(createNewApartmentActions.setCanStepToFacilities(false));
  }, [dispatch]);

  return (
    <Container className={classes.container}>
      <h2 className={classes.title}>Условия проживания</h2>
      <Form onSubmit={handleSubmit(onSubmit)} className={classes.form}>
        <FieldWithLabel fontSize="main" label="Можно с детьми" className={classes.fieldBox}>
          <Checkbox
            isDisabled={isLoading}
            name={ConditionsFormKeysEnum.children}
            control={control}
            labelText="С детьми"
          />
        </FieldWithLabel>
        <FieldWithLabel fontSize="main" label="Можно с животными" className={classes.fieldBox}>
          <Checkbox
            isDisabled={isLoading}
            name={ConditionsFormKeysEnum.pets}
            control={control}
            labelText="С животными"
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
          Далее
        </Button>
      </div>
    </Container>
  );
};
