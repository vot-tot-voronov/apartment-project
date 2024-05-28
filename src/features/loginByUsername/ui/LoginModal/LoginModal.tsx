import { useNavigate, useSearchParams } from 'react-router-dom';

import { LoginFormAsync as LoginForm } from '../LoginForm/LoginFormAsync';
import classes from './LoginModal.module.scss';

import { Modal } from '@/shared/ui';
import { ModalQueryValuesEnum, ModalTypeEnum } from '@/shared/types';

export const LoginModal = () => {
  const navigate = useNavigate();
  const [, setSearchParams] = useSearchParams();

  const handleClose = () => {
    navigate(-1);
  };

  return (
    <Modal title="Авторизация" onBack={handleClose} asyncContent className={classes.modal}>
      <LoginForm
        onClose={() => {
          setSearchParams(`${ModalTypeEnum.LOGIN}=${ModalQueryValuesEnum.LOGIN}`);
        }}
      />
    </Modal>
  );
};
