import { PropsWithChildren } from 'react';
import clsx from 'clsx';

import classes from './FieldWithLabel.module.scss';

interface IFieldWithLabelProps {
  label: string;
  fontSize?: 'main' | 'middle';
  className?: string;
}

export const FieldWithLabel = ({
  children,
  label,
  fontSize = 'middle',
  className,
}: PropsWithChildren<IFieldWithLabelProps>) => {
  return (
    <div className={clsx(classes.container, className)}>
      <p className={clsx(fontSize === 'middle' && classes.label, fontSize === 'main' && classes.labelMain)}>{label}</p>
      {children}
    </div>
  );
};
