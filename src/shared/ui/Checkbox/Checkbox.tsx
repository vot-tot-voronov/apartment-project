import clsx from 'clsx';
import { ChangeEvent, InputHTMLAttributes, useMemo } from 'react';
import { FieldValues, UseControllerProps, useController } from 'react-hook-form';
import { v4 as uuidv4 } from 'uuid';

import classes from './Checkbox.module.scss';

interface IInput
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'disabled' | 'name' | 'onBlur' | 'onChange'> {}

type CheckboxPropsType<T extends FieldValues> = UseControllerProps<T> &
  IInput & {
    className?: string;
    labelText?: string;
    isDisabled?: boolean;
    isRequired?: boolean;
    onChangeHandler?: (e: ChangeEvent<HTMLInputElement>) => void;
  };

export const Checkbox = <T extends FieldValues>(props: CheckboxPropsType<T>) => {
  const { className, labelText, name, isDisabled, isRequired, control, rules, shouldUnregister, onChangeHandler } =
    props;

  const {
    field: { onBlur, onChange, value, ref },
  } = useController<T>({ name, control, rules, shouldUnregister });

  const idInput = useMemo(() => uuidv4(), []);

  return (
    <div className={clsx(classes.container, className)}>
      <input
        ref={ref}
        type="checkbox"
        className={classes.checkbox}
        id={idInput}
        name={name}
        checked={value}
        onChange={(e: ChangeEvent<HTMLInputElement>) => {
          onChangeHandler?.(e);
          onChange(e.target.checked);
        }}
        required={isRequired}
        onBlur={onBlur}
        disabled={isDisabled}
      />
      <label htmlFor={idInput} className={classes.label}>
        {labelText}
      </label>
    </div>
  );
};
