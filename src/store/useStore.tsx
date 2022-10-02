import {
  EmailPasswordType,
  More1Type,
  More2Type,
  PhoneAuthType,
  TermType,
} from 'src/types/join';
import create from 'zustand';

export type UserInfo =
  | Pick<PhoneAuthType, 'phoneNumber' | 'authNumber'>
  | Pick<EmailPasswordType, 'email' | 'password'>
  | Omit<More1Type, 'isDuplicationChecked'>
  | More2Type
  | TermType;

interface UserInfoSlice {
  userInfo: UserInfo;
  setJoinInfo: (info: UserInfo) => void;
}

export const useStore = create<UserInfoSlice>((set, get) => ({
  userInfo: {
    email: '',
    password: '',
    phoneNumber: '',
    authNumber: 0,
    nickName: '',
    gender: '',
    year: '',
    mbti: '',
    height: 0,
    weight: 0,
    drink: 0,
    isAgree: false,
    profileImage:
      'https://img.vogue.co.kr/vogue/2022/09/style_63245e792eb39-745x930.png',
  },
  setJoinInfo: (newInfo) => {
    set((state) => ({
      ...state,
      userInfo: {
        ...get().userInfo,
        ...newInfo,
      },
    }));
  },
}));

export default useStore;
