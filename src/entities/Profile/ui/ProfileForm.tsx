/* eslint-disable react/jsx-props-no-spreading */
import { SubmitHandler, useForm } from 'react-hook-form';
import clsx from 'clsx';

import classes from './ProfileForm.module.scss';
import { IProfileForm, ProfileFieldsEnum } from '../model/types/profileTypes';

import { Button, Form, Loader, TextInput } from '@/shared/ui';

interface IProfileCardProps {
  profileData?: IProfileForm;
  onSubmit: SubmitHandler<IProfileForm>;
  isLoading: boolean;
  error?: string;
  isReadonly: boolean;
}

export const ProfileForm = ({ profileData, onSubmit, isLoading, error, isReadonly }: IProfileCardProps) => {
  const { register, handleSubmit } = useForm<IProfileForm>({ values: profileData });

  const renderForm = () => {
    if (error) {
      return <p className={classes.error}>{error}</p>;
    }

    if (isLoading) {
      return (
        <div>
          <Loader />
        </div>
      );
    }

    return (
      <Form onSubmit={handleSubmit(onSubmit)}>
        <h2 className={classes.title}>Информация о пользователе</h2>
        <div className={classes.fields}>
          <TextInput
            {...register(ProfileFieldsEnum.SURNAME)}
            className={classes.surname}
            labelText="Фамилия"
            isDisabled={isReadonly}
          />
          <TextInput
            {...register(ProfileFieldsEnum.NAME)}
            className={classes.name}
            labelText="Имя"
            isDisabled={isReadonly}
          />
          <TextInput
            {...register(ProfileFieldsEnum.MIDDLENAME)}
            className={classes.middleName}
            labelText="Отчество"
            isDisabled={isReadonly}
          />
          <TextInput
            {...register(ProfileFieldsEnum.REGION)}
            className={classes.region}
            labelText="Регион"
            isDisabled={isReadonly}
          />
          <TextInput
            {...register(ProfileFieldsEnum.CITY)}
            className={classes.city}
            labelText="Город"
            isDisabled={isReadonly}
          />
          <TextInput
            {...register(ProfileFieldsEnum.PHONE)}
            className={classes.phone}
            labelText="Телефон"
            isDisabled={isReadonly}
          />
        </div>

        <div>
          {isReadonly ? (
            <Button onClick={() => console.info('Edit')} className={classes.editBtn}>
              Редактировать
            </Button>
          ) : (
            <Button onClick={handleSubmit(onSubmit)} className={classes.editBtn}>
              Сохранить
            </Button>
          )}
        </div>
      </Form>
    );
  };

  return <div className={clsx(classes.container, (isLoading || error) && classes.center)}>{renderForm()}</div>;
};
