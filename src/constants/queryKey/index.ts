export const queryKey = {
  example: ['example'],
  exampleFunc: (example: string, hi: string) => {
    return ['arrayTypeQueryKey', { example, hi }];
  },
  checkEmailDuplicateFunc: (email: string) => {
    return ['checkEmailDuplicate', { email }];
  },
  checkNicknameDuplicateFunc: (nickname: string) => {
    return ['checkNicknameDuplicate', { nickname }];
  },
  registerFunc: (userInfo: res.UserInfo) => {
    return ['register', { userInfo }];
  },
};
