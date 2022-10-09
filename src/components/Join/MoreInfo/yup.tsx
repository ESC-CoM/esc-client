import * as yup from 'yup';

const MoreJoinSchema = yup.object({
  nickName: yup
    .string()
    .min(2, '최소 2자 이상 입력해주세요.')
    .max(10, '최대 10자만 가능합니다.')
    .required('별명을 입력해주세요.'),
  isDuplicationChecked: yup
    .boolean()
    .required('중복확인을 해주세요.')
    .oneOf([true], '중복확인을 해주세요.'),
  gender: yup.string().required('성별을 선택해주세요.'),
  year: yup
    .string()
    .min(4, '연도를 정확하게 입력해주세요.')
    .max(4, '연도를 정확하게 입력해주세요.')
    .required('생년월일을 선택해주세요.'),
  mbti: yup.string().required('MBTI를 선택해주세요.'),
});

export default MoreJoinSchema;
