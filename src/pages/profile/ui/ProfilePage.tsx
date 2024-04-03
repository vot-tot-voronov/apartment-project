import { useEffect } from 'react';

import { Container } from '@/shared/ui';
import { ProfileCard, fetchProfileService } from '@/features/getEditProfile';
import { useAppDispatch } from '@/shared/hooks';

const ProfilePage = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProfileService());
  }, [dispatch]);

  return (
    <Container>
      <ProfileCard />
    </Container>
  );
};

export default ProfilePage;
