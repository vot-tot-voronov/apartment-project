import { useMemo } from 'react';
import { useSelector } from 'react-redux';

import { rootReducer } from '@/app/providers/storeProvider';
import { ApartmentDetails } from '@/entities/Apartment';
import { getRentApartmentSlice } from '@/features/getRentApartment';

export const RentApartmentDetails = () => {
  const {
    selectors: { getIsLoading, getRentApartmentData, getError },
  } = useMemo(() => {
    return getRentApartmentSlice.injectInto(rootReducer);
  }, []);

  const isLoading = useSelector(getIsLoading);
  const fetchedData = useSelector(getRentApartmentData);
  const error = useSelector(getError);

  console.info(isLoading);
  console.info(fetchedData);
  console.info(error);

  return (
    <div>
      <ApartmentDetails />
    </div>
  );
};
