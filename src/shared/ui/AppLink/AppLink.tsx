import { Link, LinkProps } from 'react-router-dom';
import clsx from 'clsx';
import { PropsWithChildren } from 'react';

import classes from './AppLink.module.scss';

interface IAppLink extends LinkProps {
  className?: string;
}

export const AppLink = (props: PropsWithChildren<IAppLink>) => {
  const { className, to, children } = props;

  return (
    <Link to={to} className={clsx(classes.appLink, className)}>
      {children}
    </Link>
  );
};
