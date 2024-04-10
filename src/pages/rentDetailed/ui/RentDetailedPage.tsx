import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { useAppDispatch } from '@/shared/hooks';
import { RentApartmentDetails } from '@/widgets/RentApartmentDetails';
import { getRentApartmentById } from '@/features/getRentApartment';

const RentDetailedPage = () => {
  const dispatch = useAppDispatch();

  const { id: apartmentId } = useParams<{ id: string }>();

  useEffect(() => {
    if (apartmentId) {
      dispatch(getRentApartmentById(apartmentId));
    }
  }, [dispatch, apartmentId]);

  return (
    <div>
      <RentApartmentDetails />
    </div>
  );
};

export default RentDetailedPage;
