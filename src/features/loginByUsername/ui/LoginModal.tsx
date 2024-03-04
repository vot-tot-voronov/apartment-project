import { useNavigate, useLocation } from 'react-router-dom';

import { Modal } from '@/shared/ui';

export const LoginModal = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleClose = () => {
    navigate(location.pathname);
  };

  return <Modal onBack={handleClose}>LoginModal</Modal>;
};
