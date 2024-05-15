import { useEffect, useMemo } from 'react';
import { useSelector } from 'react-redux';

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

const RentListPage = () => {
  const dispatch = useAppDispatch();

  const {
    selectors: { getIsLoading },
  } = useMemo(() => {
    return getRentListSlice.injectInto(rootReducer);
  }, []);

  const rentList = useSelector(getRentListDataSelector);
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getRentListErrorSelector);

  useEffect(() => {
    dispatch(getRentList());
  }, [dispatch]);

  if (isLoading) {
    return (
      <Container className={classes.stateContainer}>
        <Loader />
      </Container>
    );
  }

  if (error) {
    return (
      <Container className={classes.stateContainer}>
        <h2 className={classes.error}>{error}</h2>
      </Container>
    );
  }

  return (
    <Container>
      <ApartmentList list={rentList ?? []} />
    </Container>
  );
};

export default RentListPage;
