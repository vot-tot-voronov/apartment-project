import { PropsWithChildren } from 'react';
import clsx from 'clsx';

import classes from './Container.module.scss';

interface IContainerProps {
  className?: string;
}

export const Container = ({ children, className }: PropsWithChildren<IContainerProps>) => {
  return <div className={clsx(classes.container, className)}>{children}</div>;
};
