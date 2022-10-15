import { UserStoreInfo } from 'src/store/useStore';

export default function changeKeyName(userInfo: UserStoreInfo) {
  const {
    email,
    password,
    phoneNumber,
    nickName,
    gender,
    year,
    mbti,
    height,
    weight,
    drink,
    isAgree,
    profileImage,
    studentIdAuthenticationKey,
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
    profileImage,
    studentIdAuthenticationKey,
  };

  return newUserInfo;
}
