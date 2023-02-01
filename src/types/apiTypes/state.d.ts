declare namespace res {
  export type Success<T> = {
    status: string;
    message: string;
    data: T;
  };
  export type Error = {
    message: string;
    status: number;
    errors: string[];
    code: string;
  };
}
