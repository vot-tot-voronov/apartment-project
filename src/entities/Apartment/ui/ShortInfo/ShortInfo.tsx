import clsx from 'clsx';
import { toast } from 'react-toastify';

import classes from './ShortInfo.module.scss';
import { IShortInfoListMakerProps, shortInfoListMaker } from '../../lib/utils';

import CopyIcon from '@/shared/assets/icons/copy.svg';
import ViewIcon from '@/shared/assets/icons/view.svg';
import { copyToClipboard } from '@/shared/lib';

export interface IShortInfoProps extends IShortInfoListMakerProps {
  adress: string;
  pricePerMonth: number;
  views: number;
  updated: string;
}

export const ShortInfo = (props: IShortInfoProps) => {
  const { fullArea, livingArea, floor, kitchenArea, builtYear, adress, pricePerMonth, views, updated } = props;

  const handleCopy = async (text: string) => {
    try {
      await copyToClipboard(text);
      toast.success('Скопировано в буфер обмена');
    } catch (error) {
      toast.error('Скопировать не удалось');
    }
  };

  return (
    <div className={classes.shortInfo}>
      <ul className={classes.shortList}>
        {shortInfoListMaker({ fullArea, livingArea, floor, kitchenArea, builtYear }).map(({ value, title }) => (
          <li key={title} className={classes.shortListItem}>
            <p>{value}</p>
            <span>{title}</span>
          </li>
        ))}
      </ul>
      <div className={classes.description}>
        <p className={clsx(classes.adress, classes.text)}>
          {adress}{' '}
          <span className={classes.copy}>
            <CopyIcon onClick={() => handleCopy(adress)} />
          </span>
        </p>
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
