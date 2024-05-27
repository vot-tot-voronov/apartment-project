import { useCallback, useEffect, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';

import classes from './RentListPage.module.scss';

import { rootReducer } from '@/app/providers/storeProvider';
import { Container } from '@/shared/ui';
import { ApartmentList } from '@/widgets/ApartmentList';
import {
  getNextRentListData,
  getRentList,
  getRentListApartment,
  getRentListErrorSelector,
  getRentListSlice,
} from '@/features/RentApartment/getRentList';
import { useAppDispatch } from '@/shared/hooks';
import { RentListFilter } from '@/features/RentApartment/rentListFilter';
import { PagePaginate } from '@/widgets/PagePaginate';

const RentListPage = () => {
  const dispatch = useAppDispatch();
  const [searchParams] = useSearchParams();

  const {
    selectors: { getIsLoading },
  } = useMemo(() => {
    return getRentListSlice.injectInto(rootReducer);
  }, []);

  const rentList = useSelector(getRentListApartment.selectAll);
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getRentListErrorSelector);

  const handleLoadNextPart = useCallback(() => {
    dispatch(getNextRentListData(searchParams.toString()));
  }, [dispatch, searchParams]);

  useEffect(() => {
    dispatch(getRentList({ queryString: searchParams.toString() }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  const renderContet = () => {
    if (error) {
      return (
        <Container className={classes.stateContainer}>
          <h2 className={classes.error}>{error}</h2>
        </Container>
      );
    }

    return <ApartmentList isLoading={isLoading} list={rentList ?? []} />;
  };

  return (
    <Container>
      <RentListFilter />
      <PagePaginate onScrollBottom={() => handleLoadNextPart()}>{renderContet()}</PagePaginate>
    </Container>
  );
};

export default RentListPage;
