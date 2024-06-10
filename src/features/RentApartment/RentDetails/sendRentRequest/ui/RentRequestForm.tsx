import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { memo, useCallback, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { RentRequestFormSchema, RentRequestFormType } from '../model/types/sendRentRequestTypes';
import classes from './RentRequestForm.module.scss';

import { Button, Form, TextInput } from '@/shared/ui';
import { masks } from '@/shared/lib';
import { getUserData } from '@/entities/User';
import { ModalQueryValuesEnum, ModalTypeEnum } from '@/shared/types';

enum RentRequestFieldEnum {
  NAME = 'name',
  EMAIL = 'email',
  PHONE = 'phone',
}

const defaultFormValues: RentRequestFormType = {
  name: '',
  email: '',
  phone: '',
};

export const RentRequestForm = memo(function RentRequestFormComponent() {
  const [isLoading, setIsLoading] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const navigate = useNavigate();

  const isAuth = useSelector(getUserData);

  const {
    control,
    handleSubmit,
    formState: {
      errors: { name, email, phone },
    },
  } = useForm<RentRequestFormType>({
    resolver: zodResolver(RentRequestFormSchema),
    defaultValues: { ...defaultFormValues },
  });

  const onSendRentRequest: SubmitHandler<RentRequestFormType> = async data => {
    setIsLoading(true);
    await new Promise(resolve => {
      setTimeout(resolve, 2000);
    });
    console.info(data);
    setIsLoading(false);
    setIsSent(true);
  };

  const handleLogIn = useCallback(() => {
    navigate({ search: `?${ModalTypeEnum.LOGIN}=${ModalQueryValuesEnum.LOGIN}` });
  }, [navigate]);

  if (isSent) {
    return (
      <div className={classes.successMessage}>
        <p>Ваша заявка успешно отправлена!</p>
        <p>Арендодатель свяжется с Вами в ближайшее время.</p>
        <p>Спасибо, что используете наш сервис!</p>
      </div>
    );
  }

  if (!isAuth) {
    return (
      <div className={classes.container}>
        <p>Для того, чтобы связаться с арендодателем, пожалуйста, авторизуйтесь в системе!</p>
        <Button onClick={handleLogIn}>Авторизоваться</Button>
      </div>
    );
  }

  return (
    <Form onSubmit={handleSubmit(onSendRentRequest)} className={classes.container}>
      <h2>Оставить заявку на просмотр апартаментов</h2>
      <TextInput
        name={RentRequestFieldEnum.NAME}
        control={control}
        isDisabled={isLoading}
        error={name?.message}
        placeholder="Имя"
      />
      <TextInput
        name={RentRequestFieldEnum.EMAIL}
        control={control}
        isDisabled={isLoading}
        error={email?.message}
        placeholder="Email"
      />
      <TextInput
        name={RentRequestFieldEnum.PHONE}
        control={control}
        isDisabled={isLoading}
        onChangeHandler={masks.phoneMask.onChange}
        error={phone?.message}
        placeholder="Телефон"
      />

      <Button onClick={handleSubmit(onSendRentRequest)} isDisabled={isLoading}>
        Отправить
      </Button>
    </Form>
  );
});
