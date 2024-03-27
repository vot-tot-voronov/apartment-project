export interface ILoginForm {
  username: string;
  password: string;
}

export enum LoginFieldEnum {
  USERNAME = 'username',
  PASSWORD = 'password',
}

export interface ILoginFormSchema {
  isLoading: boolean;
  error?: string;
}
