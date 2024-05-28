import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { memo, useState } from 'react';

import { RentRequestFormSchema, RentRequestFormType } from '../model/types/sendRentRequestTypes';
import classes from './RentRequestForm.module.scss';

import { Button, Form, TextInput } from '@/shared/ui';

enum RentRequestFieldEnum {
  NAME = 'name',
  EMAIL = 'email',
  PHONE = 'phone',
}

export const RentRequestForm = memo(function RentRequestFormComponent() {
  const [isLoading, setIsLoading] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const {
    control,
    handleSubmit,
    formState: {
      errors: { name, email, phone },
    },
  } = useForm<RentRequestFormType>({ resolver: zodResolver(RentRequestFormSchema) });

  const onSendRentRequest: SubmitHandler<RentRequestFormType> = async data => {
    setIsLoading(true);
    await new Promise(resolve => {
      setTimeout(resolve, 2000);
    });
    console.info(data);
    setIsLoading(false);
    setIsSent(true);
  };

  if (isSent) {
    return (
      <div className={classes.successMessage}>
        <p>Ваша заявка успешно отправлена!</p>
        <p>Арендодатель свяжется с Вами в ближайшее время.</p>
        <p>Спасибо, что используете наш сервис!</p>
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
        error={phone?.message}
        placeholder="Телефон"
      />

      <Button onClick={handleSubmit(onSendRentRequest)} isDisabled={isLoading}>
        Отправить
      </Button>
    </Form>
  );
});
