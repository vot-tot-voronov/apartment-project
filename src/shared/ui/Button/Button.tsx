import clsx from 'clsx';
import { ButtonHTMLAttributes, FC, memo } from 'react';

import classes from './Button.module.scss';

interface IButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'disabled'> {
  size?: 'small' | 'main' | 'middle' | 'large';
  className?: string;
  onClick?: () => void;
  dataTestId?: string;
  isDisabled?: boolean;
}

export const Button: FC<IButtonProps> = memo(function ButtonComponent(props) {
  const { size = 'main', className, children, onClick, dataTestId = 'button', isDisabled = false } = props;

  return (
    <button
      onClick={() => onClick?.()}
      className={clsx(classes.btn, classes[size], className, isDisabled && classes.disabled)}
      type="button"
      data-testid={dataTestId}
      disabled={isDisabled}
    >
      {children}
    </button>
  );
});
