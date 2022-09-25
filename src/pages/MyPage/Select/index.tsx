import { ChangeInfoItem } from 'src/components/MyPage';
import { PageLayout } from 'src/components/shared/Layout';

import $ from './style.module.scss';

const PERSONAL_INFORMATIONS = {
  email: 'abc@email.com',
  phoneNumber: '010-1234-5678',
  password: '123456',
};

export default function Select() {
  const getEncryptedPassword = (password: string) => {
    const lengthOfPassword = password.length;
    const encryptedPassword = '*'.repeat(lengthOfPassword);
    return encryptedPassword;
  };

  return (
    <PageLayout headerHeight={44} isNeedFooter={false}>
      <div className={$.container}>
        <ChangeInfoItem
          className={$['change-info-item']}
          title="이메일"
          value={PERSONAL_INFORMATIONS.email}
          href=""
        />
        <ChangeInfoItem
          className={$['change-info-item']}
          title="전화번호"
          value={PERSONAL_INFORMATIONS.phoneNumber}
          href="../change/phone"
        />
        <ChangeInfoItem
          className={$['change-info-item']}
          title="비밀번호"
          value={getEncryptedPassword(PERSONAL_INFORMATIONS.password)}
          href="../change/password"
        />
      </div>
    </PageLayout>
  );
}
