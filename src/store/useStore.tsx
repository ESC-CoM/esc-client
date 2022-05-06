import create from 'zustand';
import { UserSchema, MoreSchema } from 'src/types/join';

interface SetUserInfo {
  basicInfo: UserSchema;
  setBasicInfo: (userInfo: UserSchema) => void;
  moreInfo: MoreSchema;
  setMoreInfo: (moreInfo: MoreSchema) => void;
}

export const useStore = create<SetUserInfo>((set) => ({
  basicInfo: {
    email: '',
    password: '',
    phoneNumber: 0,
    authNumber: 0,
    gender: '',
    year: '',
    month: '',
    day: '',
    isEmailDuplicated: false,
    isPhoneDuplicated: false,
    isAuthed: false,
  },
  setBasicInfo: (basicInfo: UserSchema) => {
    set((state) => ({
      ...state,
      basicInfo: basicInfo,
    }));
  },
  moreInfo: { height: 0, weight: 0, mbti: '', drink: 0, hobbies: [] },
  setMoreInfo: (moreInfo: MoreSchema) => {
    set((state) => ({
      ...state,
      moreInfo: moreInfo,
    }));
  },
}));

export default useStore;
