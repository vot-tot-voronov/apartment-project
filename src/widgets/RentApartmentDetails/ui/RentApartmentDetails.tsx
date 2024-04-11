import { useSelector } from 'react-redux';

import { ApartmentDetails } from '@/entities/Apartment';
import { getRentApartmentData, getRentApartmentError } from '@/features/getRentApartment';

export const RentApartmentDetails = () => {
  const fetchedData = useSelector(getRentApartmentData);
  const error = useSelector(getRentApartmentError);

  console.info(fetchedData);
  console.info(error);

  return (
    <div>
      <ApartmentDetails />
    </div>
  );
};
