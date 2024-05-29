export enum ModalTypeEnum {
  LOGIN = 'login',
  SIGN_IN = 'sign_in',
}

export enum ModalQueryValuesEnum {
  LOGIN = 'open',
  SIGN_IN = 'open',
}

export type ModalViaQueryParamType = {
  modalType: ModalTypeEnum;
};
