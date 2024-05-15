import clsx from 'clsx';
import { memo } from 'react';
import { toast } from 'react-toastify';

import classes from './TextCopy.module.scss';

import { CopyIcon } from '@/shared/assets/icons';
import { copyToClipboard } from '@/shared/lib';

interface ITextCopyProps {
  text: string;
  className?: string;
}

export const TextCopy = memo(function AdressComponent({ text, className }: ITextCopyProps) {
  const handleCopy = async (text: string) => {
    try {
      await copyToClipboard(text);
      toast.success('Скопировано в буфер обмена');
    } catch (error) {
      toast.error('Скопировать не удалось');
    }
  };

  return (
    <p className={clsx(classes.textCopy, className)}>
      {text}{' '}
      <span className={classes.copy}>
        <CopyIcon onClick={() => handleCopy(text)} />
      </span>
    </p>
  );
});
