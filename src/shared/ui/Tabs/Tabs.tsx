import clsx from 'clsx';
import { useLocation } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

import classes from './Tabs.module.scss';
import { AppLink } from '../AppLink/AppLink';

export interface ITab {
  label: string;
  path: string;
  isDisabled?: boolean;
}

interface ITabsProps {
  className?: string;
  tabsList: Array<ITab>;
}

export const Tabs = ({ className, tabsList }: ITabsProps) => {
  const location = useLocation();

  return (
    <ul className={clsx(classes.tabs, className)}>
      {tabsList.map(({ label, path, isDisabled }) => (
        <li key={uuidv4()} className={clsx(classes.tab, location.pathname.includes(path) && classes.acitve)}>
          <AppLink to={path} className={clsx(classes.link, isDisabled && classes.disabled)}>
            {label}
          </AppLink>
        </li>
      ))}
    </ul>
  );
};
