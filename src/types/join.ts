export interface UserInterface {
  email: string;
  password: string;
  passwordConfirm: string;
  phoneNumber: number;
  authNumber: number;
  sex: string;
  year: string;
  month: string;
  day: string;
  height?: number;
  weight?: number;
  mbti?: string;
}

export interface TermsInterface {
  [index: string]: boolean;
  personalAgree: boolean;
  acceptAgree: boolean;
}

export type Props = {
  onState: boolean;
  onClickToggleModal: () => void;
};
