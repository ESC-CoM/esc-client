import * as yup from 'yup';

const schema = yup.object({
  oldPassword: yup.string().required('기존 비밀번호를 입력해주세요.'),
  newPassword: yup.string().required('새 비밀번호를 입력해주세요.'),
  newPasswordConfirm: yup
    .string()
    .required('새 비밀번호를 한 번 더 입력해주세요.')
    .oneOf([yup.ref('newPassword')], '비밀번호가 일치하지 않습니다.'),
});

export default schema;
