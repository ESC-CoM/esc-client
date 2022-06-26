import { UseFormSetValue } from 'react-hook-form';
import { PhoneAuthType } from 'src/types/join';

interface Props {
  phoneNumber: string;
  setValue: UseFormSetValue<PhoneAuthType>;
}

export default function insertAutoHyphen({ phoneNumber, setValue }: Props) {
  if (phoneNumber.length === 4) {
    setValue(
      'phoneNumber',
      phoneNumber.replace(/-/g, '').replace(/(\d{3})(\d{1})/, '$1-$2')
    );
    return;
  }
  if (phoneNumber.length === 10) {
    setValue(
      'phoneNumber',
      phoneNumber.replace(/-/g, '').replace(/(\d{3})(\d{4})(\d{2})/, '$1-$2-$3')
    );
    return;
  }
  if (phoneNumber.length === 13) {
    setValue(
      'phoneNumber',
      phoneNumber.replace(/-/g, '').replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3')
    );
    return;
  }
}
