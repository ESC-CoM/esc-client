import create from 'zustand';
import {
  UserSchema,
  MoreSchema,
  EmailPassword,
  PhoneAuthType,
  More1Type,
  More2Type,
  // BirthType,
} from 'src/types/join';

interface SetUserInfo {
  basicInfo: UserSchema;
  moreInfo: MoreSchema;
  setPhoneInfo: (data: PhoneAuthType) => void;
  setEmailPasswordInfo: (data: EmailPassword) => void;
  setMore1Info: (data: More1Type) => void;
  setMore2Info: (data: More2Type) => void;
}

export const useStore = create<SetUserInfo>((set, get) => ({
  basicInfo: {
    email: '',
    password: '',
    phoneNumber: '',
    authNumber: 0,
    isEmailDuplicated: false,
    isPhoneDuplicated: false,
    isAuthed: false,
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
    const { phoneNumber, authNumber, isPhoneDuplicated, isAuthed } = data;
    set((state) => ({
      ...state,
      basicInfo: {
        ...get().basicInfo,
        phoneNumber,
        authNumber,
        isPhoneDuplicated,
        isAuthed,
      },
    }));
  },
  setEmailPasswordInfo: (data) => {
    const { email, isEmailDuplicated, password } = data;
    set((state) => ({
      ...state,
      basicInfo: {
        ...get().basicInfo,
        email,
        isEmailDuplicated,
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
