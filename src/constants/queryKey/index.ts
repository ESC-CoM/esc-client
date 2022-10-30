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
  registerFunc: (userInfo: req.UserInfo) => {
    return ['register', { ...userInfo }];
  },
  phoneFunc: (phone: string) => {
    return ['phone', { phone }];
  },
  authNumFunc: (code: number) => {
    return ['authNum', { code }];
  },
  userValidationId: ['userValidationId'],
  detailUserInformationFunc: (id: number) => ['detailUserInformation', { id }],
};
