import { UserStoreInfo } from 'src/store/useStore';

import getUUID from './getUUID';

export default function changeKeyName(userInfo: UserStoreInfo) {
  const newUserInfo: any = { ...userInfo };
  newUserInfo.phone = newUserInfo.phoneNumber;
  delete newUserInfo.phoneNumber;

  newUserInfo.amountOfAlchol = newUserInfo.drink * 10;
  delete newUserInfo.drink;

  newUserInfo.nickname = newUserInfo.nickName;
  delete newUserInfo.nickName;

  const { year } = newUserInfo;
  const birth = `${year}`;
  newUserInfo.birth = birth;
  delete newUserInfo.year;

  delete newUserInfo.authNumber;

  newUserInfo.gender = newUserInfo.gender === '남' ? 'men' : 'women';

  newUserInfo.studentIdAuthenticationKey = getUUID();

  return newUserInfo as res.UserInfo;
}
