import { LoaderFunction, redirectDocument } from 'react-router-dom';

import { ModalQueryValuesEnum, ModalTypeEnum } from '../types';
import { USER_INFO_LOCALSTORAGE_KEY } from '../constants';

export const rootLoader: LoaderFunction = ({ request }) => {
  const queryParams = new URL(request.url).searchParams;

  if (queryParams.get(ModalTypeEnum.LOGIN) === ModalQueryValuesEnum.LOGIN) {
    if (localStorage.getItem(USER_INFO_LOCALSTORAGE_KEY)) {
      const path = new URL(request.url).pathname;

      return redirectDocument(path);
    }

    return {
      modalType: ModalTypeEnum.LOGIN,
    };
  }

  return null;
};
