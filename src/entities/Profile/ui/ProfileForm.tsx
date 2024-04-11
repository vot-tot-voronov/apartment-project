/* eslint-disable react/jsx-props-no-spreading */
import { SubmitHandler, useForm } from 'react-hook-form';
import clsx from 'clsx';
import { zodResolver } from '@hookform/resolvers/zod';

import classes from './ProfileForm.module.scss';
import { ProfileFormType, ProfileFieldsEnum, ProfileFormSchema } from '../model/types/profileTypes';

import { Button, ButtonThemeEnum, Form, Loader, Select, TextInput } from '@/shared/ui';

interface IProfileCardProps {
  defaultData?: ProfileFormType;
  onSubmit: SubmitHandler<ProfileFormType>;
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
  const {
    handleSubmit,
    reset,
    control,
    formState: {
      errors: { surname, name, middleName, region, city, phone },
    },
  } = useForm<ProfileFormType>({
    values: defaultData,
    resolver: zodResolver(ProfileFormSchema),
    mode: 'onChange',
  });

  const handleCancel = () => {
    setIsReadonly(true);
    reset(defaultData);
  };

  const renderForm = () => {
    if (error) {
      return <h2 className={classes.error}>{error}</h2>;
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
            name={ProfileFieldsEnum.SURNAME}
            control={control}
            className={classes.surname}
            labelText="Фамилия"
            isDisabled={isReadonly}
            error={surname?.message}
          />
          <TextInput
            name={ProfileFieldsEnum.NAME}
            control={control}
            className={classes.name}
            labelText="Имя"
            isDisabled={isReadonly}
            error={name?.message}
          />
          <TextInput
            name={ProfileFieldsEnum.MIDDLENAME}
            control={control}
            className={classes.middleName}
            labelText="Отчество"
            isDisabled={isReadonly}
            error={middleName?.message}
          />
          <Select
            className={classes.region}
            name={ProfileFieldsEnum.REGION}
            options={options}
            control={control}
            labelText="Регион"
            isDisabled={isReadonly}
            isClearable
            error={region?.message}
          />
          <TextInput
            name={ProfileFieldsEnum.CITY}
            control={control}
            className={classes.city}
            labelText="Город"
            isDisabled={isReadonly}
            error={city?.message}
          />
          <TextInput
            name={ProfileFieldsEnum.PHONE}
            control={control}
            className={classes.phone}
            labelText="Телефон"
            isDisabled={isReadonly}
            placeholder="8-XXX-XXX-XX-XX"
            error={phone?.message}
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
