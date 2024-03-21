import { useNavigate, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

import { LoginFormAsync as LoginForm } from '../LoginForm/LoginFormAsync';
import { loginByUsernameSlice } from '../../model/slice/loginByUsernameSlice';

import { Modal } from '@/shared/ui';
import { rootReducer } from '@/app/providers/storeProvider';

export const LoginModal = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleClose = () => {
    navigate(location.pathname);
  };

  useEffect(() => {
    rootReducer.inject(loginByUsernameSlice);
  }, []);

  return (
    <Modal title="Авторизация" onBack={handleClose} asyncContent>
      <LoginForm />
    </Modal>
  );
};
