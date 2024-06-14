import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import classes from './ProfilePage.module.scss';

import { AppLink, Container } from '@/shared/ui';
import { ProfileCard, fetchProfileService } from '@/features/getEditProfile';
import { useAppDispatch } from '@/shared/hooks';
import { getRouteNewRentApartment } from '@/shared/config/routeConfig/routeConfig';

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
    <Container className={classes.container}>
      <div className={classes.actions}>
        <h2>Действия с недвижимостью</h2>
        <div className={classes.links}>
          <AppLink to={getRouteNewRentApartment('ABOUT')} className={classes.link}>
            Разместить жилье для сдачи в аренду
          </AppLink>
          <AppLink to={getRouteNewRentApartment('ABOUT')} className={classes.link}>
            Разместить жилье для продажи
          </AppLink>
        </div>
      </div>
      <ProfileCard id={id} />
    </Container>
  );
};

export default ProfilePage;
