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
      {isLoading && (
        <div className={classes.stateContainer}>
          <Loader />
        </div>
      )}
      {list.length > 0 ? (
        <div className={classes.container}>
          {list.map(apartment => (
            <ApartmentListItem key={apartment.id} item={apartment} />
          ))}
        </div>
      ) : (
        <div className={classes.stateContainer}>
          <h2 className={classes.emptyTitle}>
            По вашему запросу ничего не найдено. <br />
            Попробуйте изменить настройки фильтров.
          </h2>
        </div>
      )}
    </>
  );
};
