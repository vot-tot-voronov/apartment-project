import clsx from 'clsx';
import { ChangeEvent, TextareaHTMLAttributes, useMemo } from 'react';
import { FieldValues, UseControllerProps, useController } from 'react-hook-form';
import { v4 as uuidv4 } from 'uuid';

import classes from './TextArea.module.scss';

interface ITextArea
  extends Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, 'value' | 'disabled' | 'name' | 'onBlur' | 'onChange'> {}

type TextAreaPropsType<T extends FieldValues> = UseControllerProps<T> &
  ITextArea & {
    className?: string;
    labelText?: string;
    isDisabled?: boolean;
    isRequired?: boolean;
    error?: string;
    onChangeHandler?: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  };

export const TextArea = <T extends FieldValues>(props: TextAreaPropsType<T>) => {
  const {
    className,
    labelText,
    placeholder,
    name,
    isDisabled,
    isRequired,
    error,
    control,
    rules,
    shouldUnregister,
    onChangeHandler,
    rows = 2,
  } = props;

  const {
    field: { onBlur, onChange, value, ref },
  } = useController<T>({ name, control, rules, shouldUnregister });

  const idTextArea = useMemo(() => uuidv4(), []);

  return (
    <div className={clsx(className)}>
      {(labelText || isRequired || error) && (
        <label className={classes.label} htmlFor={idTextArea}>
          <p>
            {labelText} {isRequired && <span className={clsx(!labelText && classes.relative)}>*</span>}
          </p>
          {error && <span>{error}</span>}
        </label>
      )}
      <textarea
        id={idTextArea}
        className={clsx(classes.textArea, error && classes.error)}
        ref={ref}
        onChange={(e: ChangeEvent<HTMLTextAreaElement>) => {
          onChangeHandler?.(e);
          onChange(e.target.value);
        }}
        onBlur={onBlur}
        value={value}
        name={name}
        disabled={isDisabled}
        required={isRequired}
        placeholder={placeholder || ''}
        autoComplete="off"
        rows={rows}
      />
    </div>
  );
};
