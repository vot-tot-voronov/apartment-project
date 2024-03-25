export interface ILoginForm {
  username: string;
  password: string;
}

export interface ILoginFormSchema {
  isLoading: boolean;
  error?: string;
}
