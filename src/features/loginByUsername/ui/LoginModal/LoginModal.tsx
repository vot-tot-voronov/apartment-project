import { useNavigate, useLocation } from 'react-router-dom';

import { LoginFormAsync as LoginForm } from '../LoginForm/LoginFormAsync';

import { Modal } from '@/shared/ui';

export const LoginModal = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleClose = () => {
    navigate(location.pathname);
  };

  return (
    <Modal title="Авторизация" onBack={handleClose} asyncContent>
      <LoginForm onClose={handleClose} />
    </Modal>
  );
};
