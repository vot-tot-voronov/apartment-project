import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useMemo } from 'react';
import { useSelector } from 'react-redux';

import { SignInFieldsEnum, SignInFormSchema, SignInFormType } from '../../model/types/createNewUserTypes';
import classes from './SignInForm.module.scss';
import { createNewUserSlice } from '../../model/slice/createNewUserSlice';
import { createNewUser } from '../../model/service/createNewUserService';

import { useAppDispatch } from '@/shared/hooks';
import { Button, Form, TextInput } from '@/shared/ui';
import { rootReducer } from '@/app/providers/storeProvider';
import { masks } from '@/shared/lib';

interface ISignInFormProps {
  onCloseSuccess: () => void;
}

const defaultFormValues: SignInFormType = {
  username: '',
  name: '',
  surname: '',
  phone: '',
  password: '',
  confirmedPassword: '',
};

const SignInForm = ({ onCloseSuccess }: ISignInFormProps) => {
  const dispatch = useAppDispatch();

  const {
    control,
    handleSubmit,
    formState: {
      errors: { username, surname, name, phone, password, confirmedPassword },
    },
  } = useForm<SignInFormType>({
    resolver: zodResolver(SignInFormSchema),
    defaultValues: { ...defaultFormValues },
  });

  const {
    selectors: { getIsLoading },
  } = useMemo(() => {
    return createNewUserSlice.injectInto(rootReducer);
  }, []);

  const isLoading = useSelector(getIsLoading);

  const onSubmit: SubmitHandler<SignInFormType> = async data => {
    const result = await dispatch(createNewUser({ ...data, phone: masks.phoneMask.unmask(data.phone) }));
    if (result.meta.requestStatus === 'fulfilled') {
      onCloseSuccess();
    }
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <div className={classes.container}>
        <TextInput
          name={SignInFieldsEnum.username}
          control={control}
          isDisabled={isLoading}
          placeholder="Введите логин"
          error={username?.message}
        />
        <TextInput
          name={SignInFieldsEnum.surname}
          control={control}
          className={classes.surname}
          placeholder="Фамилия"
          isDisabled={isLoading}
          error={surname?.message}
        />
        <TextInput
          name={SignInFieldsEnum.name}
          control={control}
          className={classes.name}
          placeholder="Имя"
          isDisabled={isLoading}
          error={name?.message}
        />
        <TextInput
          name={SignInFieldsEnum.phone}
          control={control}
          className={classes.phone}
          isDisabled={isLoading}
          placeholder="8 XXX XXX-XX-XX"
          onChangeHandler={masks.phoneMask.onChange}
          error={phone?.message}
        />
        <TextInput
          name={SignInFieldsEnum.password}
          control={control}
          type="password"
          isDisabled={isLoading}
          placeholder="Введите пароль"
          error={password?.message}
        />
        <TextInput
          name={SignInFieldsEnum.confirmedPassword}
          control={control}
          type="password"
          isDisabled={isLoading}
          placeholder="Подтвердите пароль"
          error={confirmedPassword?.message}
        />
      </div>
      <Button className={classes.button} onClick={handleSubmit(onSubmit)} isDisabled={isLoading}>
        Зарегистрироваться
      </Button>
    </Form>
  );
};

export default SignInForm;
