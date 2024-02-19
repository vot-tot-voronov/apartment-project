import { Link, LinkProps } from 'react-router-dom';
import clsx from 'clsx';

interface IAppLink extends LinkProps {
  classes?: string;
}

export const AppLink = (props: IAppLink) => {
  const { classes, to } = props;

  return <Link to={to} className={clsx('appLink', classes)} />;
};
