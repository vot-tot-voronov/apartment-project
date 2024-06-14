import { FieldPath, FieldValues, UseControllerProps } from 'react-hook-form';
import { ChangeEvent, InputHTMLAttributes } from 'react';
import clsx from 'clsx';

import { TextInput } from '../TextInput/TextInput';
import classes from './RangeInputs.module.scss';

import { genericMemo } from '@/shared/lib';

interface IInput
  extends Omit<
    InputHTMLAttributes<HTMLInputElement>,
    'value' | 'disabled' | 'name' | 'onBlur' | 'onChange' | 'placeholder' | 'required'
  > {}

interface IFormTo<T> {
  from?: T;
  to?: T;
}

type RangeInputsType<T extends FieldValues> = Omit<UseControllerProps<T>, 'name'> &
  IInput & {
    names: Required<IFormTo<FieldPath<T>>>;
    className?: string;
    labelsText?: IFormTo<string>;
    isDisabled?: IFormTo<boolean>;
    isRequired?: IFormTo<boolean>;
    errors?: IFormTo<string>;
    placeholders?: IFormTo<string>;
    onChangeHandlers?: IFormTo<(e: ChangeEvent<HTMLInputElement>) => void>;
  };

const RangeInputsComponent = <T extends FieldValues>(props: RangeInputsType<T>) => {
  const { names, className, labelsText, isDisabled, isRequired, errors, onChangeHandlers, control, placeholders } =
    props;

  return (
    <div className={clsx(classes.container, className)}>
      <div className={classes.fields}>
        <TextInput
          name={names.from}
          labelText={labelsText?.from}
          isDisabled={isDisabled?.from}
          isRequired={isRequired?.from}
          error={errors?.from}
          placeholder={placeholders?.from}
          onChangeHandler={onChangeHandlers?.from}
          control={control}
        />
        <TextInput
          name={names.to}
          labelText={labelsText?.to}
          isDisabled={isDisabled?.to}
          isRequired={isRequired?.to}
          error={errors?.to}
          placeholder={placeholders?.to}
          onChangeHandler={onChangeHandlers?.to}
          control={control}
        />
      </div>
    </div>
  );
};

export const RangeInputs = genericMemo(RangeInputsComponent);
