import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { memo, useCallback, useMemo } from 'react';
import { useSelector } from 'react-redux';
import clsx from 'clsx';
import { useNavigate } from 'react-router-dom';

import { SendCommentFormSchema, SendCommentFormType } from '../model/types/sendCommentTypes';
import { sendComment } from '../model/services/sendComment';
import { sendCommentSlice } from '../model/slice/sendCommentSlice';
import classes from './SendComment.module.scss';

import { Button, Form, TextInput } from '@/shared/ui';
import { useAppDispatch } from '@/shared/hooks';
import { rootReducer } from '@/app/providers/storeProvider';
import { getUserData } from '@/entities/User';
import { ModalQueryValuesEnum, ModalTypeEnum } from '@/shared/types';

const TEXT = 'text';

interface ISendCommentProps {
  className?: string;
}

export const SendComment = memo(function SendCommentButton({ className }: ISendCommentProps) {
  const dispatch = useAppDispatch();
  const {
    control,
    handleSubmit,
    reset,
    formState: {
      errors: { text },
    },
  } = useForm<SendCommentFormType>({ resolver: zodResolver(SendCommentFormSchema), defaultValues: { text: '' } });

  const {
    selectors: { getIsLoading },
  } = useMemo(() => {
    return sendCommentSlice.injectInto(rootReducer);
  }, []);

  const navigate = useNavigate();

  const isLoading = useSelector(getIsLoading);
  const isAuth = useSelector(getUserData);

  const onSendComment: SubmitHandler<SendCommentFormType> = async ({ text }) => {
    const result = await dispatch(sendComment(text));

    if (result.meta.requestStatus === 'fulfilled') {
      reset();
    }

    if (result.meta.requestStatus === 'rejected') {
      toast.error('Не удалось отправить комментарий');
    }
  };

  const handleLogIn = useCallback(() => {
    navigate({ search: `?${ModalTypeEnum.LOGIN}=${ModalQueryValuesEnum.LOGIN}` });
  }, [navigate]);

  if (!isAuth) {
    return (
      <div className={classes.notAuth}>
        <p className={classes.text}>Для того, чтобы оставлять комментарии, пожалуйста, авторизуйтесь в системе!</p>
        <Button onClick={handleLogIn} className={classes.authBtn}>
          Авторизоваться
        </Button>
      </div>
    );
  }

  return (
    <Form onSubmit={handleSubmit(onSendComment)} className={clsx(classes.container, className)}>
      <TextInput
        name={TEXT}
        control={control}
        isDisabled={isLoading}
        error={text?.message}
        placeholder="Комментарий"
        className={classes.textInput}
      />
      <Button className={classes.button} onClick={handleSubmit(onSendComment)} isDisabled={isLoading}>
        Отправить комментарий
      </Button>
    </Form>
  );
});
