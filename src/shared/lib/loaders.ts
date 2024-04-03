import { LoaderFunction } from 'react-router-dom';

import { ModalTypeEnum } from '../types';

export const rootLoader: LoaderFunction = ({ request }) => {
  const queryParams = new URL(request.url).searchParams;
  if (queryParams.get(ModalTypeEnum.LOGIN)) {
    return {
      modalType: ModalTypeEnum.LOGIN,
    };
  }

  return null;
};
