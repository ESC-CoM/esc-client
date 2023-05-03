import {
  EmailPasswordType,
  MBTIType,
  More1Type,
  More2Type,
  PhoneAuthType,
  ProfileImgType,
  StdCardType,
  TermType,
} from 'src/types/join';
import { create } from 'zustand';

export type UserStoreInfo = Pick<PhoneAuthType, 'phoneNumber' | 'authNumber'> &
  Pick<EmailPasswordType, 'email' | 'password'> &
  Omit<More1Type, 'isDuplicationChecked'> &
  More2Type &
  TermType &
  ProfileImgType &
  StdCardType;

export type UserInfo = {
  email?: string;
  password?: string;
  phoneNumber?: string;
  authNumber?: number;
  nickName?: string;
  gender?: string;
  year?: string;
  mbti?: MBTIType;
  height?: number;
  weight?: number;
  drink?: number;
  isAgree?: boolean;
  profileImage?: string;
  studentIdAuthenticationKey?: string;
};

interface UserInfoSlice {
  userInfo: UserStoreInfo;
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
    mbti: '없음',
    height: 0,
    weight: 0,
    drink: 0,
    isAgree: false,
    profileImage: '',
    studentIdAuthenticationKey: '',
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
