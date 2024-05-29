import { useNavigate, useSearchParams } from 'react-router-dom';

import { SignInFormAsync as SignInForm } from '../SignInForm/SignInFormAsync';
import classes from './SignInModal.module.scss';

import { Modal } from '@/shared/ui';
import { ModalQueryValuesEnum, ModalTypeEnum } from '@/shared/types';

export const SignInModal = () => {
  const navigate = useNavigate();
  const [, setSearchParams] = useSearchParams();

  const handleClose = () => {
    navigate(-1);
  };

  const handleOnSuccess = () => setSearchParams(`${ModalTypeEnum.SIGN_IN}=${ModalQueryValuesEnum.SIGN_IN}`);

  return (
    <Modal title="Регистрация" onBack={handleClose} asyncContent className={classes.modal}>
      <SignInForm onCloseSuccess={handleOnSuccess} />
    </Modal>
  );
};
