import * as yup from 'yup';

const TermsSchema = yup.object({
  condition1: yup.boolean().oneOf([true], '필수 약관에 동의해주세요.'),
  condition2: yup.boolean().oneOf([true], '필수 약관에 동의해주세요.'),
});

export default TermsSchema;
