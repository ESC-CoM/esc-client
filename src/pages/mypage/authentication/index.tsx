import { useRouter } from 'next/router';
import { ChangeEventHandler } from 'react';
import { useState } from 'react';
import FooterButton from 'src/components/shared/FooterButton';
import { PageLayout } from 'src/components/shared/Layout';
import PasswordInput from 'src/components/shared/PasswordInput';

import $ from './style.module.scss';

export default function AuthPage() {
  const router = useRouter();
  const [password, setPassword] = useState('');

  const handlePasswordChange: ChangeEventHandler<HTMLInputElement> = ({
    target: { value },
  }) => setPassword(value);

  const handleButtonClick = () => router.push('../select');

  return (
    <PageLayout isNeedFooter={false} headerHeight={44}>
      <div className={$.container}>
        <p className={$.discription}>
          회원님의 소중한 개인정보 보호를 위해
          <br />
          비밀번호 인증이 필요해요.
        </p>
        <PasswordInput
          label="비밀번호"
          id="password"
          className={$['password-input']}
          proptype="controlled"
          onChange={handlePasswordChange}
          value={password}
        />
      </div>
      <FooterButton text="확인" type="button" onClick={handleButtonClick} />
    </PageLayout>
  );
}
