import clsx from 'clsx';
import { ButtonHTMLAttributes, FC } from 'react';

import classes from './Button.module.scss';

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: 'small' | 'main' | 'middle' | 'large';
  className?: string;
  onClick?: () => void;
  dataTestId?: string;
}

export const Button: FC<IButtonProps> = props => {
  const { size = 'main', className, children, onClick, dataTestId = 'button' } = props;

  return (
    <button
      onClick={() => onClick?.()}
      className={clsx(classes.btn, classes[size], className)}
      type="button"
      data-testid={dataTestId}
    >
      {children}
    </button>
  );
};
