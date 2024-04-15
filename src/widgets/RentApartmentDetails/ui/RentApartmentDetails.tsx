import { useSelector } from 'react-redux';

import { ApartmentDetails } from '@/entities/Apartment';
import { getRentApartmentData } from '@/features/getRentApartment';

export const RentApartmentDetails = () => {
  const fetchedData = useSelector(getRentApartmentData);

  if (!fetchedData) {
    return null;
  }

  return (
    <div>
      <ApartmentDetails data={fetchedData} />
    </div>
  );
};
