import { useSelector } from 'react-redux';
import { useEffect, useMemo } from 'react';
import { useParams } from 'react-router-dom';

import { ApartmentDetails } from '@/entities/Apartment';
import { getRentApartmentData } from '@/features/RentApartment/getRentApartment';
import { CommentList } from '@/entities/Comment';
import { rootReducer } from '@/app/providers/storeProvider';
import { getCommentsRent, getCommentsRentSlice, getRentComments } from '@/features/RentApartment/getComments';
import { getCommentsRentError } from '@/features/RentApartment/getComments/model/selectors/getCommentsRentSelectors';
import { useAppDispatch } from '@/shared/hooks';

export const RentApartmentDetails = () => {
  const { id: apartmentId } = useParams<{ id: string }>();

  const {
    selectors: { getIsLoading },
  } = useMemo(() => {
    return getCommentsRentSlice.injectInto(rootReducer);
  }, []);

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (apartmentId) {
      dispatch(getCommentsRent(apartmentId));
    }
  }, [dispatch, apartmentId]);

  const rentApartmentData = useSelector(getRentApartmentData);
  const isCommentsLoading = useSelector(getIsLoading);
  const errorText = useSelector(getCommentsRentError);
  const commentsList = useSelector(getRentComments.selectAll);

  if (!rentApartmentData) {
    return null;
  }

  return (
    <div>
      <ApartmentDetails data={rentApartmentData} />
      <CommentList isLoading={isCommentsLoading} comments={commentsList} error={errorText} />
    </div>
  );
};
