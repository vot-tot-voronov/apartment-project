/* eslint-disable react/jsx-props-no-spreading */
import { SubmitHandler, useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { useMemo } from 'react';

import classes from './LoginForm.module.scss';
import { ILoginForm } from '../../model/types/loginByUsernameTypes';
import { loginByUsernameSlice } from '../../model/slice/loginByUsernameSlice';
import { loginByUsername } from '../../model/services/loginByUsernameService';

import { Button, TextInput } from '@/shared/ui';
import { useSliceInject, useAppDispatch } from '@/shared/hooks';

interface ILoginFormProps {
  onClose: () => void;
}

const LoginForm = ({ onClose }: ILoginFormProps) => {
  const dispatch = useAppDispatch();
  const { register, handleSubmit } = useForm<ILoginForm>();
  const injectedLoginSlice = useSliceInject(loginByUsernameSlice);

  const getIsLoading = useMemo(() => {
    return injectedLoginSlice.selector(state => state.loginByUsername.isLoading);
  }, [injectedLoginSlice]);

  const isLoading = useSelector(getIsLoading);

  const onSubmit: SubmitHandler<ILoginForm> = async data => {
    const result = await dispatch(loginByUsername(data));
    if (result.meta.requestStatus === 'fulfilled') {
      onClose();
    }
  };

  return (
    <form>
      <div className={classes.container}>
        <TextInput {...register('username')} isDisabled={isLoading} placeholder="Имя пользователя" />
        <TextInput {...register('password')} isDisabled={isLoading} placeholder="Пароль" />
      </div>
      <Button className={classes.button} onClick={handleSubmit(onSubmit)} isDisabled={isLoading}>
        Войти
      </Button>
    </form>
  );
};

export default LoginForm;
