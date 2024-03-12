/* eslint-disable react/jsx-props-no-spreading */
import { SubmitHandler, useForm } from 'react-hook-form';

import styles from './LoginForm.module.scss';

import { Button, TextInput } from '@/shared/ui';

interface ILoginFormFields {
  name: string;
  password: string;
}

export const LoginForm = () => {
  const { register, handleSubmit } = useForm<ILoginFormFields>();
  const onSubmit: SubmitHandler<ILoginFormFields> = data => console.info(data);

  return (
    <form>
      <div className={styles.container}>
        <TextInput {...register('name')} className={styles.input} placeholder="Имя пользователя" />
        <TextInput {...register('password')} className={styles.input} placeholder="Пароль" />
      </div>
      <Button className={styles.button} onClick={handleSubmit(onSubmit)}>
        Войти
      </Button>
    </form>
  );
};
