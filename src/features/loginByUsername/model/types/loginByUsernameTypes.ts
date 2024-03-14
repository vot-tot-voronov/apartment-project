export interface ILoginForm {
  username: string;
  password: string;
}

export interface ILoginFormSchema extends ILoginForm {
  isLoading: boolean;
  error?: string;
}
