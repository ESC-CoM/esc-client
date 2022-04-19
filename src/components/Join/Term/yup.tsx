import * as yup from 'yup';

const TermsSchema = yup.object({
  personalAgree: yup.boolean().oneOf([true], ''),
  acceptAgree: yup.boolean().oneOf([true], ''),
});

export default TermsSchema;
