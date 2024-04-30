import { SubmitHandler } from 'react-hook-form';
import { useCallback, useMemo } from 'react';
import { useSelector } from 'react-redux';

import { profileCardSlice } from '../model/slice/profileCardSlice';
import { putProfileService } from '../model/services/putProfile/putProfileService';
import { getEditProfileError, getEditProfiletData } from '../model/selectors/getEditProfileSelectors';

import { ProfileFormType, ProfileForm } from '@/entities/Profile';
import { useAppDispatch } from '@/shared/hooks';
import { rootReducer } from '@/app/providers/storeProvider';

interface IProfileCardProps {
  id: string;
}

export const ProfileCard = ({ id }: IProfileCardProps) => {
  const dispatch = useAppDispatch();
  const {
    actions: { setIsReadonly },
    selectors: { getIsLoading, getIsReadonly },
  } = useMemo(() => {
    return profileCardSlice.injectInto(rootReducer);
  }, []);

  const isLoading = useSelector(getIsLoading);
  const fetchedData = useSelector(getEditProfiletData);
  const error = useSelector(getEditProfileError);
  const isReadonly = useSelector(getIsReadonly);

  const handleSubmit: SubmitHandler<ProfileFormType> = useCallback(
    async data => {
      await dispatch(putProfileService({ ...data, id }));
    },
    [dispatch, id],
  );

  const handleEdit = useCallback(
    (isReadonly: boolean) => {
      dispatch(setIsReadonly(isReadonly));
    },
    [dispatch, setIsReadonly],
  );

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
