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
  meetingItemListFunc: (requestParams: req.Home) => {
    return ['meetingItemList', { ...requestParams }];
  },
  meetingItemDetailFunc: (id: number) => {
    return ['meetingItemDetail', id];
  },
  userValidationId: ['userValidationId'],
  detailUserInformationFunc: (id: number) => ['detailUserInformation', { id }],
};
