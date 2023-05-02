import { create } from 'zustand';

type PhoneStoreState = {
  authCode: string;
  checkAuthCode: (code: string) => void;
};

export const usePhoneStore = create<PhoneStoreState>((set) => ({
  authCode: '',
  checkAuthCode: (code: string) => {
    set((state) => {
      return { ...state, authCode: code };
    });
  },
}));
