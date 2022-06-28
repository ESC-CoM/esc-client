import * as yup from 'yup';

const MoreJoinSchema = yup.object({
  // 원활한 테스트를 위해 임시 주석처리
  gender: yup.string().required('성별을 선택해주세요.'),
  year: yup
    .string()
    .min(4, '연도를 정확하게 입력해주세요.')
    .max(4, '연도를 정확하게 입력해주세요.')
    .required('생년월일을 선택해주세요.'),
  month: yup.string().required('생년월일을 선택해주세요.'),
  day: yup.string().required('생년월일을 선택해주세요.'),
  mbti: yup.string().min(4, 'MBTI를 선택해주세요.'),
});

export default MoreJoinSchema;
