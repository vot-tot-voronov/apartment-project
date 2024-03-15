import { InputHTMLAttributes, forwardRef, memo, useMemo } from 'react';
import clsx from 'clsx';
import { v4 as uuidv4 } from 'uuid';

import classes from './TextInput.module.scss';

interface IInputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'disabled'> {
  className?: string;
  value?: string;
  labelText?: string;
  isDisabled?: boolean;
  isRequired?: boolean;
  error?: string;
}

const InputComponent = forwardRef<HTMLInputElement, IInputProps>(function InputComponent(props, ref) {
  const { className, onChange, value, labelText, placeholder, name, onBlur, isDisabled, isRequired, error } = props;

  const idInput = useMemo(() => uuidv4(), []);

  return (
    <div className={className}>
      {(labelText || isRequired || error) && (
        <label className={classes.label} htmlFor={idInput}>
          <p>
            {labelText} {isRequired && <span className={clsx(!labelText && classes.relative)}>*</span>}
          </p>
          {error && <span>{error}</span>}
        </label>
      )}
      <input
        ref={ref}
        className={clsx(classes.input, error && classes.error)}
        id={idInput}
        placeholder={placeholder || ''}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        type="text"
        name={name}
        disabled={isDisabled}
      />
    </div>
  );
});

export const TextInput = memo(InputComponent);
