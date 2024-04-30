import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { Container } from '@/shared/ui';
import { ProfileCard, fetchProfileService } from '@/features/getEditProfile';
import { useAppDispatch } from '@/shared/hooks';

const ProfilePage = () => {
  const dispatch = useAppDispatch();
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    if (id) {
      dispatch(fetchProfileService(id));
    }
  }, [dispatch, id]);

  if (!id) {
    return null;
  }

  return (
    <Container>
      <ProfileCard id={id} />
    </Container>
  );
};

export default ProfilePage;
