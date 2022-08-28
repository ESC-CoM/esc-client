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
  | Omit<More1Type, 'isDuplicationChecked'>
  | More2Type;

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
