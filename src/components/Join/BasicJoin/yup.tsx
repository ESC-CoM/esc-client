import * as yup from 'yup';

const JoinSchema = yup.object({
  email: yup
    .string()
    .email('올바른 이메일 형식을 입력해주세요.')
    .required('필수 입력사항입니다.'),
  password: yup
    .string()
    .min(8, '비밀번호는 영문, 숫자 포함 최소 8자입니다.')
    .max(30, '비밀번호는 영문, 숫자 포함 최대 30자입니다.')
    .required('필수 입력사항입니다.'),
  passwordConfirm: yup
    .string()
    .oneOf([yup.ref('password'), null], '비밀번호가 일치하지 않습니다.'),
  sex: yup.string().required('필수 입력사항입니다.'),
  year: yup.string().required('생년월일을 선택해주세요.'),
  month: yup.string().required('생년월일을 선택해주세요.'),
  day: yup.string().required('생년월일을 선택해주세요.'),
});

export default JoinSchema;
