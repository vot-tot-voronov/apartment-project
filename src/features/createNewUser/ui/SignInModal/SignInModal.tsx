import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import { useCallback } from 'react';

import { SignInFormAsync as SignInForm } from '../SignInForm/SignInFormAsync';
import classes from './SignInModal.module.scss';

import { Modal } from '@/shared/ui';
import { ModalQueryValuesEnum, ModalTypeEnum } from '@/shared/types';
import { getRouteRentList } from '@/shared/config/routeConfig/routeConfig';

export const SignInModal = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [, setSearchParams] = useSearchParams();

  const { from } = location.state || { from: { pathname: getRouteRentList() } };

  const handleClose = useCallback(() => {
    navigate(from, { replace: true, state: {} });
  }, [navigate, from]);

  const handleOnSuccess = useCallback(() => {
    setSearchParams(`${ModalTypeEnum.SIGN_IN}=${ModalQueryValuesEnum.SIGN_IN}`);
  }, [setSearchParams]);

  return (
    <Modal title="Регистрация" onBack={handleClose} asyncContent className={classes.modal}>
      <SignInForm onCloseSuccess={handleOnSuccess} />
    </Modal>
  );
};
