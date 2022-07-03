import create, { StateCreator } from 'zustand';
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

interface UserInfoSlice {
  userInfo: UserInfo;
  setJoinInfo: (info: UserInfo) => void;
}

const createUser: StateCreator<UserInfoSlice> = (set) => ({
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
      userInfo: {
        ...state.userInfo,
        ...newInfo,
      },
    }));
  },
});

export const userStore = create<UserInfoSlice>()((...a) => ({
  ...createUser(...a),
}));

export default userStore;
