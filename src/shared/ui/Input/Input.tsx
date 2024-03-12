import { ChangeEvent, InputHTMLAttributes, memo } from 'react';
import clsx from 'clsx';

import styles from './Input.module.scss';

interface IInputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'> {
  className?: string;
  onChange?: (value: string) => void;
  value?: string;
  labelText?: string;
}

const InputComponent = (props: IInputProps) => {
  const { className, onChange, value, labelText, placeholder, type = 'text' } = props;

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
  };

  return (
    <div className={clsx(styles.container, className)}>
      {labelText && (
        <label className={styles.label} htmlFor={labelText}>
          {labelText}
        </label>
      )}
      <input
        className={styles.input}
        id={labelText}
        placeholder={placeholder || ''}
        value={value}
        onChange={handleChange}
        type={type}
      />
    </div>
  );
};

export const Input = memo(InputComponent);
