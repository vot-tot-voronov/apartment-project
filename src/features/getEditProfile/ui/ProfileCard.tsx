import { SubmitHandler } from 'react-hook-form';
import { useCallback, useEffect, useMemo } from 'react';
import { useSelector } from 'react-redux';

import { fetchProfileService } from '../model/services/fetchProfileService';
import { profileCardSlice } from '../model/slice/profileCardSlice';

import { IProfileForm, ProfileForm } from '@/entities/Profile';
import { useAppDispatch } from '@/shared/hooks';
import { rootReducer } from '@/app/providers/storeProvider';

export const ProfileCard = () => {
  const dispatch = useAppDispatch();
  const {
    selectors: { getIsLoading, getProfileData, getError, getIsReadonly },
  } = useMemo(() => {
    return profileCardSlice.injectInto(rootReducer);
  }, []);

  const isLoading = useSelector(getIsLoading);
  const profileData = useSelector(getProfileData);
  const error = useSelector(getError);
  const isReadonly = useSelector(getIsReadonly);

  const handleSubmit: SubmitHandler<IProfileForm> = useCallback(data => {
    console.info(data);
  }, []);

  useEffect(() => {
    dispatch(fetchProfileService());
  }, [dispatch]);

  return (
    <ProfileForm
      isReadonly={isReadonly}
      profileData={profileData}
      isLoading={isLoading}
      error={error}
      onSubmit={handleSubmit}
    />
  );
};
