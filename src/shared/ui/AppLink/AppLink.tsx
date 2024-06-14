import { Link, LinkProps } from 'react-router-dom';
import clsx from 'clsx';
import { PropsWithChildren, memo } from 'react';

import classes from './AppLink.module.scss';

interface IAppLink extends LinkProps {
  className?: string;
}

export const AppLink = memo(function AppLinkComponent(props: PropsWithChildren<IAppLink>) {
  const { className, to, children, replace: isReplace, state } = props;

  return (
    <Link to={to} className={clsx(classes.appLink, className)} replace={isReplace} state={state}>
      {children}
    </Link>
  );
});
