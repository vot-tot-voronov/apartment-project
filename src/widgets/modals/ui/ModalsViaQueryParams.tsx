import { ModalTypeEnum, ModalViaQueryParamType } from '@/shared/types';
import { LoginModal } from '@/features/loginByUsername';
import { SignInModal } from '@/features/createNewUser';

export const ModalsViaQueryParams = ({ modalType }: ModalViaQueryParamType) => {
  switch (modalType) {
    case ModalTypeEnum.LOGIN:
      return <LoginModal />;
    case ModalTypeEnum.SIGN_IN:
      return <SignInModal />;

    default:
      return null;
  }
};
