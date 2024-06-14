import { useNavigate } from 'react-router-dom';

import classes from './NotFoundPage.module.scss';

import { Button, ButtonThemeEnum, Container } from '@/shared/ui';
import { getRouteRentList } from '@/shared/config/routeConfig/routeConfig';

const NotFoundPage = () => {
  const navigate = useNavigate();

  const handleGoBack = () => navigate(getRouteRentList(), { replace: true });

  return (
    <Container className={classes.container}>
      <h1 className={classes.title}>404</h1>
      <p className={classes.text}>Упс, страница, которую вы ищите, не существует.</p>
      <Button onClick={handleGoBack} className={classes.button} theme={ButtonThemeEnum.SECONDARY}>
        На главную
      </Button>
    </Container>
  );
};

export default NotFoundPage;
