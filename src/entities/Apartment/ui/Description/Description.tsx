import { useState } from 'react';
import clsx from 'clsx';

import classes from './Description.module.scss';

import ArrowIcon from '@/shared/assets/icons/arrow.svg';

interface IDescriptionProps {
  text: string;
}

export const Description = ({ text }: IDescriptionProps) => {
  const [shouldShowMore, setShouldShowMore] = useState(false);

  return (
    <div className={classes.description}>
      <h2 className={classes.title}>Описание</h2>
      <p className={classes.text}>
        {shouldShowMore ? text : text.slice(0, 380)}
        {shouldShowMore ? '' : '...'}
        <br />
      </p>
      <div onClick={() => setShouldShowMore(prev => !prev)}>
        <p className={classes.showMore}>
          {shouldShowMore ? 'Скрыть' : 'Показать больше'}{' '}
          <span className={clsx(classes.arrow, shouldShowMore && classes.up)}>
            <ArrowIcon />
          </span>
        </p>
      </div>
    </div>
  );
};
