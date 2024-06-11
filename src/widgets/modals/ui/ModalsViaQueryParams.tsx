import { ModalTypeEnum, ModalViaQueryParamType } from '@/shared/types';
import { LoginModal } from '@/features/loginByUsername';
import { SignInModal } from '@/features/createNewUser';
import { RentRequestModal } from '@/features/RentApartment/RentDetails/sendRentRequest';

export const ModalsViaQueryParams = ({ modalType }: ModalViaQueryParamType) => {
  switch (modalType) {
    case ModalTypeEnum.LOGIN:
      return <LoginModal />;
    case ModalTypeEnum.SIGN_IN:
      return <SignInModal />;
    case ModalTypeEnum.RENT_REQUEST:
      return <RentRequestModal />;

    default:
      return null;
  }
};
