import clsx from 'clsx';
import { ButtonHTMLAttributes, FC } from 'react';

import styles from './Button.module.scss';

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: 'small' | 'main' | 'middle' | 'large';
  className?: string;
  onClick?: () => void;
}

export const Button: FC<IButtonProps> = ({ size = 'main', className, children, onClick }) => {
  return (
    <button
      onClick={() => onClick?.()}
      data-testid="button"
      className={clsx(styles.btn, styles[size], className)}
      type="button"
    >
      {children}
    </button>
  );
};
