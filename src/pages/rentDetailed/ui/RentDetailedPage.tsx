import { useEffect, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import classes from './RentDetailedPage.module.scss';

import { useAppDispatch } from '@/shared/hooks';
import { RentApartmentDetails } from '@/widgets/RentApartmentDetails';
import {
  getRentApartmentById,
  getRentApartmentError,
  getRentApartmentSlice,
} from '@/features/RentApartment/RentDetails/getRentApartment';
import { rootReducer } from '@/app/providers/storeProvider';
import { Container, Loader } from '@/shared/ui';
import { RentRequestForm } from '@/features/RentApartment/RentDetails/sendRentRequest';

const RentDetailedPage = () => {
  const dispatch = useAppDispatch();

  const { id: apartmentId } = useParams<{ id: string }>();

  const {
    selectors: { getIsLoading },
  } = useMemo(() => {
    return getRentApartmentSlice.injectInto(rootReducer);
  }, []);

  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getRentApartmentError);

  useEffect(() => {
    if (apartmentId) {
      dispatch(getRentApartmentById(apartmentId));
    }
  }, [dispatch, apartmentId]);

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
    <div className={classes.mainContainer}>
      <div className={classes.content}>
        <RentApartmentDetails />
      </div>
      <div className={classes.sidebar}>
        <Container className={classes.sticky}>
          <RentRequestForm />
        </Container>
      </div>
    </div>
  );
};

export default RentDetailedPage;
