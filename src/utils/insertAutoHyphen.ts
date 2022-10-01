type Props = {
  phoneNumber: string;
  setPhoneNumber: (number: string) => void;
};

export default function insertAutoHyphen({
  phoneNumber,
  setPhoneNumber,
}: Props) {
  const length = phoneNumber.length;
  const isNumberOrHyphen = /^[0-9-]*$/.test(phoneNumber);

  if (!isNumberOrHyphen || length > 13) return;

  if (length === 4) {
    setPhoneNumber(
      phoneNumber.replace(/-/g, '').replace(/(\d{3})(\d{1})/, '$1-$2')
    );
    return;
  }
  if (length === 10) {
    setPhoneNumber(
      phoneNumber.replace(/-/g, '').replace(/(\d{3})(\d{4})(\d{2})/, '$1-$2-$3')
    );
    return;
  }
  if (length === 13) {
    setPhoneNumber(
      phoneNumber.replace(/-/g, '').replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3')
    );
    return;
  }
  setPhoneNumber(phoneNumber);
}
