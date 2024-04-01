/* eslint-disable react/jsx-props-no-spreading */
import { SubmitHandler, useForm } from 'react-hook-form';
import clsx from 'clsx';

import classes from './ProfileForm.module.scss';
import { IProfileForm, ProfileFieldsEnum } from '../model/types/profileTypes';

import { Button, ButtonThemeEnum, Form, Loader, Select, TextInput } from '@/shared/ui';

interface IProfileCardProps {
  defaultData?: IProfileForm;
  onSubmit: SubmitHandler<IProfileForm>;
  isLoading: boolean;
  error?: string;
  isReadonly: boolean;
  setIsReadonly: (isReadonly: boolean) => void;
}

const options = [
  { value: '1', label: 'Краснодарский край' },
  { value: '2', label: 'Республика Саха' },
];

export const ProfileForm = ({
  defaultData,
  onSubmit,
  setIsReadonly,
  isLoading,
  error,
  isReadonly,
}: IProfileCardProps) => {
  const { register, handleSubmit, reset, control } = useForm<IProfileForm>({ values: defaultData });

  const handleCancel = () => {
    setIsReadonly(true);
    reset(defaultData);
  };

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
          <Select
            className={classes.region}
            name={ProfileFieldsEnum.REGION}
            options={options}
            control={control}
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

        <div className={classes.buttons}>
          {isReadonly ? (
            <Button onClick={() => setIsReadonly(false)} className={classes.btn}>
              Редактировать
            </Button>
          ) : (
            <>
              <Button onClick={handleSubmit(onSubmit)} className={classes.btn}>
                Сохранить
              </Button>
              <Button onClick={handleCancel} theme={ButtonThemeEnum.SECONDARY} className={classes.btn}>
                Отмена
              </Button>
            </>
          )}
        </div>
      </Form>
    );
  };

  return <div className={clsx(classes.container, (isLoading || error) && classes.center)}>{renderForm()}</div>;
};
