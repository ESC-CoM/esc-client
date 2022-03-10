import * as yup from 'yup';

const TermsSchema = yup.object({
  personalAgree: yup.boolean().oneOf([true], '필수 약관에 동의해주세요.'),
  acceptAgree: yup.boolean().oneOf([true], '필수 약관에 동의해주세요.'),
});

export default TermsSchema;
