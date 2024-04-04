export enum ModalTypeEnum {
  LOGIN = 'login',
  SIGN_IN = 'sing_in',
}

export type ModalViaQueryParamType = {
  modalType: ModalTypeEnum;
};
