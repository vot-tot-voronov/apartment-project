import { InputHTMLAttributes, useMemo } from 'react';
import clsx from 'clsx';
import { v4 as uuidv4 } from 'uuid';
import { FieldValues, UseControllerProps, useController } from 'react-hook-form';

import classes from './TextInput.module.scss';

import { genericMemo } from '@/shared/lib';

interface IInput
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'disabled' | 'name' | 'onBlur' | 'onChange'> {}

type InputPropsType<T extends FieldValues> = UseControllerProps<T> &
  IInput & {
    className?: string;
    labelText?: string;
    isDisabled?: boolean;
    isRequired?: boolean;
    error?: string;
  };

const InputComponent = <T extends FieldValues>(props: InputPropsType<T>) => {
  const {
    className,
    labelText,
    placeholder,
    name,
    isDisabled,
    isRequired,
    error,
    control,
    defaultValue,
    rules,
    shouldUnregister,
  } = props;
  const {
    field: { onBlur, onChange, value = '', ref },
  } = useController<T>({ name, control, defaultValue, rules, shouldUnregister });

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
};

export const TextInput = genericMemo(InputComponent);
