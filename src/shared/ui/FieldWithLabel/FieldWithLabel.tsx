import { PropsWithChildren } from 'react';

import classes from './FieldWithLabel.module.scss';

interface IFieldWithLabelProps {
  label: string;
}

export const FieldWithLabel = ({ children, label }: PropsWithChildren<IFieldWithLabelProps>) => {
  return (
    <div className={classes.container}>
      <p className={classes.label}>{label}</p>
      {children}
    </div>
  );
};
