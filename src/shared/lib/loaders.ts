import { LoaderFunction, redirectDocument } from 'react-router-dom';

import { ModalQueryValuesEnum, ModalTypeEnum } from '../types';
import { USER_INFO_LOCALSTORAGE_KEY } from '../constants';

export const rootLoader: LoaderFunction = ({ request }) => {
  const queryParams = new URL(request.url).searchParams;
  const path = new URL(request.url).pathname;
  const isUserLogedIn = localStorage.getItem(USER_INFO_LOCALSTORAGE_KEY);

  if (queryParams.get(ModalTypeEnum.LOGIN) === ModalQueryValuesEnum.LOGIN) {
    if (isUserLogedIn) {
      return redirectDocument(path);
    }

    return {
      modalType: ModalTypeEnum.LOGIN,
    };
  }

  if (queryParams.get(ModalTypeEnum.SIGN_IN) === ModalQueryValuesEnum.SIGN_IN) {
    if (isUserLogedIn) {
      return redirectDocument(path);
    }

    return {
      modalType: ModalTypeEnum.SIGN_IN,
    };
  }

  return null;
};
