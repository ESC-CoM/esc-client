import create from 'zustand';
import {
  UserSchema,
  MoreSchema,
  EmailPassword,
  PhoneAuthType,
  More1Type,
  More2Type,
} from 'src/types/join';

interface SetUserInfo {
  basicInfo: Pick<
    UserSchema,
    'email' | 'password' | 'phoneNumber' | 'authNumber'
  >;
  moreInfo: MoreSchema;
  setPhoneInfo: (
    data: Pick<PhoneAuthType, 'phoneNumber' | 'authNumber'>
  ) => void;
  setEmailPasswordInfo: (
    data: Pick<EmailPassword, 'email' | 'password'>
  ) => void;
  setMore1Info: (data: More1Type) => void;
  setMore2Info: (data: More2Type) => void;
}

export const useStore = create<SetUserInfo>((set, get) => ({
  basicInfo: {
    email: '',
    password: '',
    phoneNumber: '',
    authNumber: 0,
  },
  moreInfo: {
    gender: '',
    year: '',
    month: '',
    day: '',
    mbti: '',
    height: 0,
    weight: 0,
    drink: 0,
  },
  setPhoneInfo: (data) => {
    const { phoneNumber, authNumber } = data;
    set((state) => ({
      ...state,
      basicInfo: {
        ...get().basicInfo,
        phoneNumber,
        authNumber,
      },
    }));
  },
  setEmailPasswordInfo: (data) => {
    const { email, password } = data;
    set((state) => ({
      ...state,
      basicInfo: {
        ...get().basicInfo,
        email,
        password,
      },
    }));
  },
  setMore1Info: (data) => {
    const { gender, year, month, day, mbti } = data;
    set((state) => ({
      ...state,
      moreInfo: {
        ...get().moreInfo,
        gender,
        year,
        month,
        day,
        mbti,
      },
    }));
  },
  setMore2Info: (data) => {
    const { height, weight, drink } = data;
    set((state) => ({
      ...state,
      moreInfo: {
        ...get().moreInfo,
        height,
        weight,
        drink,
      },
    }));
  },
}));

export default useStore;
