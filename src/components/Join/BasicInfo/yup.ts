import * as yup from 'yup';

export const EmailPasswordYup = yup.object({
  email: yup
    .string()
    .email('올바른 이메일 형식을 입력해주세요.')
    .required('필수 입력사항입니다.'),
  password: yup
    .string()
    .min(8, '비밀번호는 영문, 숫자 포함 최소 8자입니다.')
    .max(30, '비밀번호는 영문, 숫자 포함 최대 30자입니다.')
    .required('필수 입력사항입니다.'),
  isDuplicationChecked: yup
    .boolean()
    .required('이메일 중복확인을 해주세요.')
    .oneOf([true], '중복확인을 해주세요.'),
});

export const PhoneYup = yup.object({
  phoneNumber: yup
    .string()
    .typeError('올바른 휴대폰 번호를 입력해주세요.')
    .required('필수 입력사항입니다.'),
  authNumber: yup
    .number()
    .typeError('올바른 인증번호를 입력해주세요.')
    .required('필수 입력사항입니다.'),
  isReceivedAuthNum: yup
    .boolean()
    .required('휴대폰 인증을 해주세요.')
    .oneOf([true], '휴대폰 인증을 해주세요.'),
});
