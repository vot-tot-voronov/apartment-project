import clsx from 'clsx';

import { ConditionsAndFacilitiesType, ListItemType } from '../../model/types/apartmentTypes';
import classes from './ConditionsAndFacilities.module.scss';

import SuccessIcon from '@/shared/assets/icons/success.svg';
import CrossIcon from '@/shared/assets/icons/cross.svg';

interface IConditionsAndFacilitiesProps {
  conditionsFacilities: ConditionsAndFacilitiesType;
}

const ListItem = ({ value, label }: ListItemType) => {
  return (
    <li className={classes.listItem}>
      <span className={clsx(classes.icon, !value && classes.rejected)}>{value ? <SuccessIcon /> : <CrossIcon />}</span>
      <p className={classes.text}>{label}</p>
    </li>
  );
};

export const ConditionsAndFacilities = ({ conditionsFacilities }: IConditionsAndFacilitiesProps) => {
  return (
    <div className={classes.container}>
      <h2 className={classes.title}>Условия и удобства</h2>
      <div className={classes.facilitiesAndConditions}>
        <div>
          <p className={classes.textTitle}>Удобства</p>
          <ul className={classes.list}>
            {conditionsFacilities.facilities.map(item => (
              <ListItem key={item.label} value={item.value} label={item.label} />
            ))}
          </ul>
        </div>
        <div>
          <p className={classes.textTitle}>Условия</p>
          <ul className={classes.list}>
            {conditionsFacilities.conditions.map(item => (
              <ListItem key={item.label} value={item.value} label={item.label} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
