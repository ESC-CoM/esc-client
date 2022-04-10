import * as yup from 'yup';

const schema = yup
  .object()
  .shape({
    email: yup
      .string()
      .email('이메일을 양식을 확인해주세요')
      .required('이메일을 입력해주세요.'),
    password: yup.string().required('비밀번호를 입력해주세요.'),
    isSaveId: yup.boolean(),
    isAutoLogin: yup.boolean(),
  })
  .required();

export default schema;
