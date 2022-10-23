declare namespace res {
  export type Error = {
    message: string;
    status: number;
    errors: string[];
    code: string;
  };
}
