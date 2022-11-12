declare namespace req {
  export type AllowOrRejectRequest = 'ALLOWED' | 'REJECTED';
}

declare namespace res {
  export type AllowOrRejectRequest = {
    status: number;
    message: string;
    data: null;
  };
}
