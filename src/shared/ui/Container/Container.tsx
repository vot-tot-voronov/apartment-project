import { PropsWithChildren } from 'react';
import clsx from 'clsx';

import classes from './Container.module.scss';

interface IContainerProps {
  className?: string;
  title?: string;
}

export const Container = ({ children, className, title }: PropsWithChildren<IContainerProps>) => {
  return (
    <div className={clsx(classes.container, className)}>
      {title && <h2 className={classes.title}>{title}</h2>}
      {children}
    </div>
  );
};
