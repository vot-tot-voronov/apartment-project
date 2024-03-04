import { ModalTypeEnum, TModalViaQueryParam } from '@/shared/types';
import { LoginModal } from '@/features/loginByUsername';

export const ModalsViaQueryParams = ({ modalType }: TModalViaQueryParam) => {
  switch (modalType) {
    case ModalTypeEnum.LOGIN:
      return <LoginModal />;

    default:
      return null;
  }
};
