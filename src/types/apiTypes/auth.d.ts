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
  export type AuthSuccess = res.Success<{
    accessToken: string;
    refreshToken: string;
  }>;
  export type RefreshSuccess = res.Success<string>;
  export type ValidateSuccess = number;
}
