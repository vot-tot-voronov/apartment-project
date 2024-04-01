import { PropsWithChildren, ReactNode, useMemo } from 'react';
import Select, { GroupBase, OptionsOrGroups } from 'react-select';
import { v4 as uuidv4 } from 'uuid';
import clsx from 'clsx';
import { Control, Controller } from 'react-hook-form';

import classes from './Select.module.scss';

interface ISelectStaticProps extends PropsWithChildren {
  name: string;
  options: OptionsOrGroups<unknown, GroupBase<unknown>>;
  labelText?: string;
  className?: string;
  placeholder?: ReactNode;
  isDisabled?: boolean;
  isRequired?: boolean;
  error?: string;
  control?: Control<any>;
}

export const SelectStatic = ({
  options,
  labelText,
  className,
  placeholder = '',
  isDisabled,
  isRequired,
  error,
  name,
  control,
}: ISelectStaticProps) => {
  const selectId = useMemo(() => uuidv4(), []);

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
      <Controller
        name={name}
        control={control}
        render={({ field: { value, onChange } }) => {
          return (
            <Select
              inputId={selectId}
              onChange={onChange}
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
          );
        }}
      />
    </div>
  );
};
