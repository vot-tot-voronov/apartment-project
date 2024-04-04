import { useNavigate, useLocation } from 'react-router-dom';

import { LoginFormAsync as LoginForm } from '../LoginForm/LoginFormAsync';
import classes from './LoginModal.module.scss';

import { Modal } from '@/shared/ui';

export const LoginModal = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleClose = () => {
    navigate(location.pathname);
  };

  return (
    <Modal title="Авторизация" onBack={handleClose} asyncContent className={classes.modal}>
      <LoginForm onClose={handleClose} />
    </Modal>
  );
};
