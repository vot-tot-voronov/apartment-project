import classes from './ApartmentList.module.scss';

import { ApartmentItemType } from '@/entities/Apartment';
import { ApartmentListItem } from '@/entities/ApartmentListItem';
import { Loader } from '@/shared/ui';

interface IApartmentListProps {
  list: Array<ApartmentItemType>;
  isLoading: boolean;
}

export const ApartmentList = ({ list, isLoading }: IApartmentListProps) => {
  return (
    <>
      <div className={classes.container}>
        {list.map(apartment => (
          <ApartmentListItem key={apartment.id} item={apartment} />
        ))}
      </div>
      {isLoading && (
        <div className={classes.stateContainer}>
          <Loader />
        </div>
      )}
    </>
  );
};
