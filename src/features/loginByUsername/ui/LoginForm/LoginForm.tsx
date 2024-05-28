import { SubmitHandler, useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { useMemo } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';

import classes from './LoginForm.module.scss';
import { LoginFormType, LoginFieldEnum, LoginFormSchema } from '../../model/types/loginByUsernameTypes';
import { loginByUsernameSlice } from '../../model/slice/loginByUsernameSlice';
import { loginByUsername } from '../../model/services/loginByUsernameService';

import { Button, Form, TextInput } from '@/shared/ui';
import { useAppDispatch } from '@/shared/hooks';
import { rootReducer } from '@/app/providers/storeProvider';

interface ILoginFormProps {
  onClose: () => void;
}

const defaultFormValues: LoginFormType = {
  username: '',
  password: '',
};

const LoginForm = ({ onClose }: ILoginFormProps) => {
  const dispatch = useAppDispatch();

  const {
    control,
    handleSubmit,
    formState: {
      errors: { username, password },
    },
  } = useForm<LoginFormType>({ resolver: zodResolver(LoginFormSchema), defaultValues: { ...defaultFormValues } });

  const {
    selectors: { getIsLoading },
  } = useMemo(() => {
    return loginByUsernameSlice.injectInto(rootReducer);
  }, []);

  const isLoading = useSelector(getIsLoading);

  const onSubmit: SubmitHandler<LoginFormType> = async data => {
    const result = await dispatch(loginByUsername(data));
    if (result.meta.requestStatus === 'fulfilled') {
      onClose();
    }
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <div className={classes.container}>
        <TextInput
          name={LoginFieldEnum.USERNAME}
          control={control}
          isDisabled={isLoading}
          placeholder="Имя пользователя"
          error={username?.message}
        />
        <TextInput
          name={LoginFieldEnum.PASSWORD}
          control={control}
          type="password"
          isDisabled={isLoading}
          placeholder="Пароль"
          error={password?.message}
        />
      </div>
      <Button className={classes.button} onClick={handleSubmit(onSubmit)} isDisabled={isLoading}>
        Войти
      </Button>
    </Form>
  );
};

export default LoginForm;
