export enum ModalTypeEnum {
  LOGIN = 'login',
  SIGN_IN = 'sing_in',
}

export type TModalViaQueryParam = {
  modalType: ModalTypeEnum;
};
