export enum ModalTypeEnum {
  LOGIN = 'login',
  SIGN_IN = 'sing_in',
}

export enum ModalQueryValuesEnum {
  LOGIN = 'true',
}

export type ModalViaQueryParamType = {
  modalType: ModalTypeEnum;
};
