export enum ModalTypeEnum {
  LOGIN = 'login',
  SIGN_IN = 'sign_in',
  RENT_REQUEST = 'rent_request',
}

export enum ModalQueryValuesEnum {
  LOGIN = 'open',
  SIGN_IN = 'open',
  RENT_REQUEST = 'open',
}

export type ModalViaQueryParamType = {
  modalType: ModalTypeEnum;
};
