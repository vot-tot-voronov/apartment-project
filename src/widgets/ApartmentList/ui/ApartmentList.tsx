import classes from './ApartmentList.module.scss';

import { ApartmentItemType } from '@/entities/Apartment';
import { ApartmentListItem } from '@/entities/ApartmentListItem';

interface IApartmentListProps {
  list: Array<ApartmentItemType>;
}

export const ApartmentList = ({ list }: IApartmentListProps) => {
  return (
    <div className={classes.container}>
      {list.map(apartment => (
        <ApartmentListItem key={apartment.id} item={apartment} />
      ))}
    </div>
  );
};
