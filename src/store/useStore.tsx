import {
  EmailPasswordType,
  More1Type,
  More2Type,
  PhoneAuthType,
} from 'src/types/join';
import create from 'zustand';

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
