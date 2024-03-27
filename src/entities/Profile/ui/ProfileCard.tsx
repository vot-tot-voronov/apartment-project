/* eslint-disable react/jsx-props-no-spreading */
import { SubmitHandler, useForm } from 'react-hook-form';

import classes from './ProfileCard.module.scss';
import { IProfileForm, ProfileFieldsEnum } from '../model/types/profileCardTypes';

import { Button, Form, TextInput } from '@/shared/ui';

export const ProfileCard = () => {
  const { register, handleSubmit } = useForm<IProfileForm>();

  const onSubmit: SubmitHandler<IProfileForm> = data => {
    console.info(data);
  };

  return (
    <div className={classes.container}>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <h2 className={classes.title}>Информация о пользователе</h2>
        <div className={classes.fields}>
          <TextInput {...register(ProfileFieldsEnum.SURNAME)} className={classes.surname} labelText="Фамилия" />
          <TextInput {...register(ProfileFieldsEnum.NAME)} className={classes.name} labelText="Имя" />
          <TextInput {...register(ProfileFieldsEnum.MIDDLENAME)} className={classes.middleName} labelText="Отчество" />
          <TextInput {...register(ProfileFieldsEnum.REGION)} className={classes.region} labelText="Регион" />
          <TextInput {...register(ProfileFieldsEnum.CITY)} className={classes.city} labelText="Город" />
          <TextInput {...register(ProfileFieldsEnum.PHONE)} className={classes.phone} labelText="Телефон" />
        </div>

        <Button onClick={handleSubmit(onSubmit)} className={classes.editBtn}>
          Редактировать
        </Button>
      </Form>
    </div>
  );
};
