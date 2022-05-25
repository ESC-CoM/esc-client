import create from 'zustand';
import {
  EmailPasswordType,
  PhoneAuthType,
  More1Type,
  More2Type,
} from 'src/types/join';

type UserInfo =
  | Pick<PhoneAuthType, 'phoneNumber' | 'authNumber'>
  | Pick<EmailPasswordType, 'email' | 'password'>
  | More1Type
  | More2Type;

interface SetUserInfo {
  userInfo: UserInfo;
  setJoinInfo: (info: UserInfo) => void;
}

export const useStore = create<SetUserInfo>((set, get) => ({
  userInfo: {
    email: '',
    password: '',
    phoneNumber: '',
    authNumber: 0,
    gender: '',
    year: '',
    month: '',
    day: '',
    mbti: '',
    height: 0,
    weight: 0,
    drink: 0,
  },
  setJoinInfo: (newInfo) => {
    set((state) => ({
      ...state,
      newInfo: {
        ...get().userInfo,
        ...newInfo,
      },
    }));
  },
}));

export default useStore;
