/* eslint-disable react/jsx-props-no-spreading */
import { SubmitHandler, useForm } from 'react-hook-form';

import styles from './LoginForm.module.scss';
import { ILoginForm } from '../../model/types/loginByUsernameTypes';
import { loginByUsername } from '../../model/services/loginByUsernameService';

import { Button, TextInput } from '@/shared/ui';
import { useAppDispatch } from '@/shared/hooks/useAppDispatch';

export const LoginForm = () => {
  const dispatch = useAppDispatch();
  const { register, handleSubmit } = useForm<ILoginForm>();

  const onSubmit: SubmitHandler<ILoginForm> = data => dispatch(loginByUsername(data));

  return (
    <form>
      <div className={styles.container}>
        <TextInput {...register('username')} className={styles.input} placeholder="Имя пользователя" />
        <TextInput {...register('password')} className={styles.input} placeholder="Пароль" />
      </div>
      <Button className={styles.button} onClick={handleSubmit(onSubmit)}>
        Войти
      </Button>
    </form>
  );
};
