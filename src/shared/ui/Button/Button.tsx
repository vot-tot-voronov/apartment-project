import clsx from 'clsx';
import { ButtonHTMLAttributes, FC, memo } from 'react';

import classes from './Button.module.scss';

export enum ButtonThemeEnum {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
}

interface IButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'disabled'> {
  size?: 'small' | 'main' | 'middle' | 'large';
  className?: string;
  onClick?: () => void;
  dataTestId?: string;
  isDisabled?: boolean;
  theme?: ButtonThemeEnum;
}

export const Button: FC<IButtonProps> = memo(function ButtonComponent(props) {
  const {
    size = 'main',
    className,
    children,
    onClick,
    dataTestId = 'button',
    isDisabled = false,
    theme = ButtonThemeEnum.PRIMARY,
  } = props;

  return (
    <button
      onClick={() => onClick?.()}
      className={clsx(classes.btn, classes[size], classes[theme], className, isDisabled && classes.disabled)}
      type="button"
      data-testid={dataTestId}
      disabled={isDisabled}
    >
      {children}
    </button>
  );
});
