import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { memo, useMemo } from 'react';
import { useSelector } from 'react-redux';
import clsx from 'clsx';

import { SendCommentFormSchema, SendCommentFormType } from '../model/types/sendCommentTypes';
import { sendComment } from '../model/services/sendComment';
import { sendCommentSlice } from '../model/slice/sendCommentSlice';
import classes from './SendComment.module.scss';

import { Button, Form, TextInput } from '@/shared/ui';
import { useAppDispatch } from '@/shared/hooks';
import { rootReducer } from '@/app/providers/storeProvider';

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

  const isLoading = useSelector(getIsLoading);

  const onSendComment: SubmitHandler<SendCommentFormType> = async ({ text }) => {
    const result = await dispatch(sendComment(text));

    if (result.meta.requestStatus === 'fulfilled') {
      reset();
    }

    if (result.meta.requestStatus === 'rejected') {
      toast.error('Не удалось отправить комментарий');
    }
  };

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
