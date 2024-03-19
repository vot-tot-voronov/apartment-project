import clsx from 'clsx';

import classes from './Loader.module.scss';

interface ILoaderProps {
  className?: string;
}

export const Loader = ({ className }: ILoaderProps) => (
  <div className={clsx(classes.ldsRoller, className)}>
    <div />
    <div />
    <div />
    <div />
    <div />
    <div />
    <div />
    <div />
  </div>
);
