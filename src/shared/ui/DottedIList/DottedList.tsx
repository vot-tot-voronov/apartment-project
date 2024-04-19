import clsx from 'clsx';
import { ReactNode } from 'react';
import { v4 as uuidv4 } from 'uuid';

import classes from './DottedList.module.scss';

interface IDottedItem {
  label: ReactNode;
  value: string | number;
}

interface IDottedListProps {
  list: Array<IDottedItem>;
  className?: string;
}

export const DottedList = ({ list, className }: IDottedListProps) => {
  return (
    <ul className={clsx(classes.list, className)}>
      {list.map(({ label, value }) => (
        <li key={uuidv4()} className={classes.item}>
          <span className={classes.label}>{label}</span>
          <span className={classes.dots}>&nbsp;</span>
          <span className={classes.value}>{value}</span>
        </li>
      ))}
    </ul>
  );
};
