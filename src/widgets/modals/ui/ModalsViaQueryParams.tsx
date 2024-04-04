import { ModalTypeEnum, ModalViaQueryParamType } from '@/shared/types';
import { LoginModal } from '@/features/loginByUsername';

export const ModalsViaQueryParams = ({ modalType }: ModalViaQueryParamType) => {
  switch (modalType) {
    case ModalTypeEnum.LOGIN:
      return <LoginModal />;

    default:
      return null;
  }
};
