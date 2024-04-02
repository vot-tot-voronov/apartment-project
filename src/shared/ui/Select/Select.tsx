import { ReactNode, useMemo } from 'react';
import Select, { GroupBase, OptionsOrGroups } from 'react-select';
import { v4 as uuidv4 } from 'uuid';
import clsx from 'clsx';
import { FieldValues, UseControllerProps, useController } from 'react-hook-form';

import classes from './Select.module.scss';

interface ISelect {
  options: OptionsOrGroups<unknown, GroupBase<unknown>>;
  labelText?: string;
  className?: string;
  placeholder?: ReactNode;
  isDisabled?: boolean;
  isRequired?: boolean;
  error?: string;
}

type ISelectProps<T extends FieldValues> = UseControllerProps<T> & ISelect;

export const SelectComponent = <T extends FieldValues>({
  options,
  labelText,
  className,
  placeholder = '',
  isDisabled,
  isRequired,
  error,
  name,
  control,
  defaultValue,
  rules,
  shouldUnregister,
}: ISelectProps<T>) => {
  const selectId = useMemo(() => uuidv4(), []);

  const {
    field: { onChange, onBlur, value },
  } = useController<T>({ name, control, defaultValue, rules, shouldUnregister });

  return (
    <div className={clsx(classes.box, className)}>
      {(labelText || isRequired || error) && (
        <label className={classes.label} htmlFor={selectId}>
          <p>
            {labelText} {isRequired && <span className={clsx(!labelText && classes.relative)}>*</span>}
          </p>
          {error && <span>{error}</span>}
        </label>
      )}
      <Select
        inputId={selectId}
        onChange={onChange}
        onBlur={onBlur}
        options={options}
        openMenuOnFocus
        placeholder={placeholder}
        classNames={{
          control: state =>
            clsx(
              classes.control,
              state.isDisabled && classes.disabled,
              error && classes.error,
              state.isFocused && classes.focused,
            ),
          singleValue: () => classes.singleValue,
          menu: () => classes.menu,
          option: state => clsx(classes.option, state.isSelected && classes.optionSelected),
        }}
        value={value}
        isDisabled={isDisabled}
      />
    </div>
  );
};
