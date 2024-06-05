import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import clsx from 'clsx';
import { useSelector } from 'react-redux';
import { useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';

import { AboutFormKeysEnum, AboutFormSchema, AboutFormType } from '../../model/types/createNewApartmentTypes';
import classes from './AboutForm.module.scss';
import { renovationOptions, typeOptions } from '../../model/constants';
import { createNewApartmentActions, createNewApartmentSlice } from '../../model/slice/createNewApartmentSlice';

import { Button, Checkbox, Container, FieldWithLabel, Form, Select, TextArea, TextInput } from '@/shared/ui';
import { useAppDispatch } from '@/shared/hooks';
import { rootReducer } from '@/app/providers/storeProvider';
import { getRouteNewRentApartment } from '@/shared/config/routeConfig/routeConfig';

export const AboutForm = () => {
  const dispatch = useAppDispatch();
  const {
    selectors: { getAboutFormData, getIsLoading },
  } = useMemo(() => {
    return createNewApartmentSlice.injectInto(rootReducer);
  }, []);

  const aboutFormData = useSelector(getAboutFormData);
  const isLoading = useSelector(getIsLoading);

  const navigate = useNavigate();

  const {
    control,
    handleSubmit,
    formState: {
      isValid,
      errors: {
        type,
        description,
        fullArea,
        livingArea,
        kitchenArea,
        builtYear,
        floor,
        floors,
        rooms,
        city,
        adress,
        renovation,
        viewFromWindow,
        pricePerMonth,
        prepayment,
      },
    },
  } = useForm<AboutFormType>({
    resolver: zodResolver(AboutFormSchema),
    mode: 'onChange',
    defaultValues: { ...aboutFormData },
  });

  const onSubmit: SubmitHandler<AboutFormType> = async data => {
    dispatch(createNewApartmentActions.setAboutFormData(data));
    dispatch(createNewApartmentActions.setCanStepToConditions(true));
    navigate(getRouteNewRentApartment('CONDITIONS'));
  };

  useEffect(() => {
    dispatch(createNewApartmentActions.setCanStepToConditions(false));
  }, [dispatch]);

  return (
    <Container className={classes.container}>
      <h2 className={classes.title}>Общая информация</h2>
      <Form onSubmit={handleSubmit(onSubmit)} className={classes.form}>
        <FieldWithLabel fontSize="main" label="Выберите тип апартаментов" className={classes.fieldBox}>
          <Select
            isDisabled={isLoading}
            name={AboutFormKeysEnum.type}
            options={typeOptions}
            control={control}
            placeholder="Тип"
            error={type?.message}
          />
        </FieldWithLabel>
        <FieldWithLabel
          fontSize="main"
          label="Опишите свои апартаменты"
          className={clsx(classes.fieldBox, classes.fullWidthField)}
        >
          <TextArea
            isDisabled={isLoading}
            name={AboutFormKeysEnum.description}
            control={control}
            placeholder="Описание"
            rows={4}
            error={description?.message}
          />
        </FieldWithLabel>
        <FieldWithLabel fontSize="main" label="Полная площадь" className={classes.fieldBox}>
          <TextInput
            isDisabled={isLoading}
            name={AboutFormKeysEnum.fullArea}
            control={control}
            placeholder="М²"
            error={fullArea?.message}
          />
        </FieldWithLabel>
        <FieldWithLabel fontSize="main" label="Жилая площадь" className={classes.fieldBox}>
          <TextInput
            isDisabled={isLoading}
            name={AboutFormKeysEnum.livingArea}
            control={control}
            placeholder="М²"
            error={livingArea?.message}
          />
        </FieldWithLabel>
        <FieldWithLabel fontSize="main" label="Площадь кухни" className={clsx(classes.fieldBox)}>
          <TextInput
            isDisabled={isLoading}
            name={AboutFormKeysEnum.kitchenArea}
            control={control}
            placeholder="М²"
            error={kitchenArea?.message}
          />
        </FieldWithLabel>
        <FieldWithLabel fontSize="main" label="Этаж" className={clsx(classes.fieldBox, classes.fieldStart)}>
          <TextInput
            isDisabled={isLoading}
            name={AboutFormKeysEnum.floor}
            control={control}
            placeholder="Этаж"
            error={floor?.message}
          />
        </FieldWithLabel>
        <FieldWithLabel fontSize="main" label="Этажность дома" className={classes.fieldBox}>
          <TextInput
            isDisabled={isLoading}
            name={AboutFormKeysEnum.floors}
            control={control}
            placeholder="Этажность"
            error={floors?.message}
          />
        </FieldWithLabel>
        <FieldWithLabel fontSize="main" label="Год постройки" className={classes.fieldBox}>
          <TextInput
            isDisabled={isLoading}
            name={AboutFormKeysEnum.builtYear}
            control={control}
            placeholder="Год"
            error={builtYear?.message}
          />
        </FieldWithLabel>
        <FieldWithLabel fontSize="main" label="Количество комнат" className={classes.fieldBox}>
          <TextInput
            isDisabled={isLoading}
            name={AboutFormKeysEnum.rooms}
            control={control}
            placeholder="Количество"
            error={rooms?.message}
          />
        </FieldWithLabel>
        <FieldWithLabel fontSize="main" label="Город" className={classes.fieldBox}>
          <TextInput
            isDisabled={isLoading}
            name={AboutFormKeysEnum.city}
            control={control}
            placeholder="Название"
            error={city?.message}
          />
        </FieldWithLabel>
        <FieldWithLabel fontSize="main" label="Адрес апартаментов" className={classes.fieldBox}>
          <TextInput
            isDisabled={isLoading}
            name={AboutFormKeysEnum.adress}
            control={control}
            placeholder="Адрес"
            error={adress?.message}
          />
        </FieldWithLabel>
        <FieldWithLabel fontSize="main" label="Вид ремонта" className={classes.fieldBox}>
          <Select
            isDisabled={isLoading}
            name={AboutFormKeysEnum.renovation}
            options={renovationOptions}
            control={control}
            placeholder="Ремонт"
            error={renovation?.message}
          />
        </FieldWithLabel>
        <FieldWithLabel fontSize="main" label="Наличие балкона" className={classes.fieldBox}>
          <Checkbox isDisabled={isLoading} name={AboutFormKeysEnum.balcony} control={control} labelText="Есть" />
        </FieldWithLabel>
        <FieldWithLabel fontSize="main" label="Вид из окна" className={classes.fieldBox}>
          <TextInput
            isDisabled={isLoading}
            name={AboutFormKeysEnum.viewFromWindow}
            control={control}
            placeholder="Вид"
            error={viewFromWindow?.message}
          />
        </FieldWithLabel>
        <FieldWithLabel fontSize="main" label="Наличие мусоропровода" className={classes.fieldBox}>
          <Checkbox isDisabled={isLoading} name={AboutFormKeysEnum.garbageChute} control={control} labelText="Есть" />
        </FieldWithLabel>
        <FieldWithLabel fontSize="main" label="Цена за месяц" className={classes.fieldBox}>
          <TextInput
            isDisabled={isLoading}
            name={AboutFormKeysEnum.pricePerMonth}
            control={control}
            placeholder="Цена"
            error={pricePerMonth?.message}
          />
        </FieldWithLabel>
        <FieldWithLabel fontSize="main" label="Предоплата" className={classes.fieldBox}>
          <TextInput
            isDisabled={isLoading}
            name={AboutFormKeysEnum.prepayment}
            control={control}
            placeholder="Предоплата"
            error={prepayment?.message}
          />
        </FieldWithLabel>
      </Form>
      <Button isDisabled={!isValid || isLoading} onClick={handleSubmit(onSubmit)} className={classes.button}>
        Далее
      </Button>
    </Container>
  );
};
