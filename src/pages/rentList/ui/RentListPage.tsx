import { useEffect, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';

import classes from './RentListPage.module.scss';

import { rootReducer } from '@/app/providers/storeProvider';
import { Container, Loader } from '@/shared/ui';
import { ApartmentList } from '@/widgets/ApartmentList';
import {
  getRentList,
  getRentListDataSelector,
  getRentListErrorSelector,
  getRentListSlice,
} from '@/features/RentApartment/getRentList';
import { useAppDispatch } from '@/shared/hooks';
import { RentListFilter } from '@/features/RentApartment/rentListFilter';

const RentListPage = () => {
  const dispatch = useAppDispatch();
  const [searchParams] = useSearchParams();

  const {
    selectors: { getIsLoading },
  } = useMemo(() => {
    return getRentListSlice.injectInto(rootReducer);
  }, []);

  const rentList = useSelector(getRentListDataSelector);
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getRentListErrorSelector);

  useEffect(() => {
    dispatch(getRentList(searchParams.toString()));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  const renderContet = () => {
    if (isLoading) {
      return (
        <div className={classes.stateContainer}>
          <Loader />
        </div>
      );
    }

    if (error) {
      return (
        <Container className={classes.stateContainer}>
          <h2 className={classes.error}>{error}</h2>
        </Container>
      );
    }

    return <ApartmentList list={rentList ?? []} />;
  };

  return (
    <Container>
      <RentListFilter />
      {renderContet()}
    </Container>
  );
};

export default RentListPage;
