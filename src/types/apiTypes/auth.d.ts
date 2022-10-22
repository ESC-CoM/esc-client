declare namespace req {
  export type Auth = {
    email: string;
    password: string;
  };
  export type Refresh = {
    accessToken: string | null;
    refreshToken: string | null;
  };
}

declare namespace res {
  export type AuthSuccess = {
    status: string;
    message: string;
    data: {
      accessToken: string;
      refreshToken: string;
    };
  };
  export type AuthError = {
    message: string;
    status: number;
    errors: string[];
    code: string;
  };
  export type RefreshSuccess = {
    status: string;
    message: string;
    data: {
      accessToken: string | null;
    };
  };
  export type ValidateSuccess = number;

  export type ValidateError = {
    message: string;
    status: number;
    errors: string[];
    code: string;
  };
}
