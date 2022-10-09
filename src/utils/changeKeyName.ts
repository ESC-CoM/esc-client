import { UserStoreInfo } from 'src/store/useStore';

import getUUID from './getUUID';

export default function changeKeyName(userInfo: UserStoreInfo) {
  const {
    email,
    password,
    phoneNumber,
    nickName,
    gender,
    year,
    isAgree,
    height,
    weight,
    mbti,
    drink,
    profileImage,
  } = userInfo;

  const newUserInfo: req.UserInfo = {
    email,
    password,
    phone: phoneNumber,
    nickname: nickName,
    gender,
    birth: year,
    isAgree,
    height,
    weight,
    mbti,
    amountOfAlchol: drink * 10,
    profileImage: profileImage,
    studentIdAuthenticationKey: getUUID(),
  };

  return newUserInfo;
}
