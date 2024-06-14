import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import { useCallback } from 'react';

import { LoginFormAsync as LoginForm } from '../LoginForm/LoginFormAsync';
import classes from './LoginModal.module.scss';

import { Modal } from '@/shared/ui';
import { ModalQueryValuesEnum, ModalTypeEnum } from '@/shared/types';
import { getRouteRentList } from '@/shared/config/routeConfig/routeConfig';

export const LoginModal = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [, setSearchParams] = useSearchParams();

  const { from } = location.state || { from: { pathname: getRouteRentList() } };

  const handleClose = useCallback(() => {
    navigate(from, { replace: true, state: {} });
  }, [navigate, from]);

  const handleOnSuccess = useCallback(() => {
    setSearchParams(`${ModalTypeEnum.LOGIN}=${ModalQueryValuesEnum.LOGIN}`);
  }, [setSearchParams]);

  return (
    <Modal title="Авторизация" onBack={handleClose} asyncContent className={classes.modal}>
      <LoginForm onCloseSuccess={handleOnSuccess} />
    </Modal>
  );
};
