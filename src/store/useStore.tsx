import create from 'zustand';
import { UserSchema, MoreSchema } from 'src/types/join';

interface SetUserInfo {
  basicInfo: UserSchema;
  setBasicInfo: (element: any) => void;
  moreInfo: MoreSchema;
  setMoreInfo: (element: any) => void;
}

export const useStore = create<SetUserInfo>((set, get) => ({
  basicInfo: {
    email: '',
    password: '',
    phoneNumber: '',
    authNumber: 0,
    gender: '',
    year: '',
    month: '',
    day: '',
    isEmailDuplicated: false,
    isPhoneDuplicated: false,
    isAuthed: false,
  },
  setBasicInfo: (element: any) => {
    set((state) => ({
      ...state,
      basicInfo: { ...get().basicInfo, ...element },
    }));
  },
  moreInfo: { gender: '', year: '', month: '', day: '', mbti: '' },
  setMoreInfo: (element: any) => {
    set((state) => ({
      ...state,
      moreInfo: { ...get().moreInfo, ...element },
    }));
  },
}));

export default useStore;
