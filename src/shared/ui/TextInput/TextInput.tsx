import { InputHTMLAttributes, forwardRef, memo } from 'react';
import clsx from 'clsx';

import styles from './TextInput.module.scss';

interface IInputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'value'> {
  className?: string;
  value?: string;
  labelText?: string;
}

const InputComponent = forwardRef<HTMLInputElement, IInputProps>(function InputComponent(props, ref) {
  const { className, onChange, value, labelText, placeholder, name, onBlur } = props;

  return (
    <div className={clsx(styles.container, className)}>
      {labelText && (
        <label className={styles.label} htmlFor={labelText}>
          {labelText}
        </label>
      )}
      <input
        ref={ref}
        className={styles.input}
        id={labelText}
        placeholder={placeholder || ''}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        type="text"
        name={name}
      />
    </div>
  );
});

export const TextInput = memo(InputComponent);
