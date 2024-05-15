import clsx from 'clsx';

import classes from './ShortInfo.module.scss';
import { shortInfoListMaker } from '../../lib/utils';
import { ShortInfoDataType } from '../../model/types/apartmentTypes';

import { ViewIcon } from '@/shared/assets/icons';
import { TextCopy } from '@/shared/ui';

interface IShortInfoProps {
  info: ShortInfoDataType;
}

export const ShortInfo = ({ info }: IShortInfoProps) => {
  const { fullArea, livingArea, floor, floors, kitchenArea, builtYear, adress, pricePerMonth, views, updated } = info;

  return (
    <div className={classes.shortInfo}>
      <ul className={classes.shortList}>
        {shortInfoListMaker({ fullArea, livingArea, floor, floors, kitchenArea, builtYear }).map(({ value, title }) => (
          <li key={title} className={classes.shortListItem}>
            <p>{value}</p>
            <span>{title}</span>
          </li>
        ))}
      </ul>
      <div className={classes.description}>
        <TextCopy text={adress} className={classes.text} />
        <h2 className={clsx(classes.pricePerMonth, classes.text)}>{pricePerMonth} ₽/мес</h2>
        <p className={clsx(classes.views, classes.text)}>
          <span className={classes.icon}>
            <ViewIcon />
          </span>
          {views}
        </p>
        <p className={clsx(classes.updated, classes.text)}>
          Обновлено: <span>{updated}</span>
        </p>
      </div>
    </div>
  );
};
