import { SubmitHandler } from 'react-hook-form';
import { useCallback, useEffect, useMemo } from 'react';
import { useSelector } from 'react-redux';

import { fetchProfileService } from '../model/services/fetchProfileService';
import { profileCardSlice } from '../model/slice/profileCardSlice';
import { putProfileService } from '../model/services/putProfileService';

import { IProfileForm, ProfileForm } from '@/entities/Profile';
import { useAppDispatch } from '@/shared/hooks';
import { rootReducer } from '@/app/providers/storeProvider';

export const ProfileCard = () => {
  const dispatch = useAppDispatch();
  const {
    actions: { setIsReadonly },
    selectors: { getIsLoading, getProfileData, getError, getIsReadonly },
  } = useMemo(() => {
    return profileCardSlice.injectInto(rootReducer);
  }, []);

  const isLoading = useSelector(getIsLoading);
  const fetchedData = useSelector(getProfileData);
  const error = useSelector(getError);
  const isReadonly = useSelector(getIsReadonly);

  const handleSubmit: SubmitHandler<IProfileForm> = useCallback(
    async data => {
      await dispatch(putProfileService(data));
    },
    [dispatch],
  );

  const handleEdit = useCallback(
    (isReadonly: boolean) => {
      dispatch(setIsReadonly(isReadonly));
    },
    [dispatch, setIsReadonly],
  );

  useEffect(() => {
    dispatch(fetchProfileService());
  }, [dispatch]);

  return (
    <ProfileForm
      setIsReadonly={handleEdit}
      isReadonly={isReadonly}
      defaultData={fetchedData}
      isLoading={isLoading}
      error={error}
      onSubmit={handleSubmit}
    />
  );
};
