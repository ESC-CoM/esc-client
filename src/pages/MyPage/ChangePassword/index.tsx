import FooterButton from 'src/components/shared/FooterButton';
import { PageLayout } from 'src/components/shared/Layout';
import PasswordInput from 'src/components/shared/PasswordInput';

import $ from './style.module.scss';

export default function ChangePassword() {
  return (
    <PageLayout isNeedFooter={false} headerHeight={44}>
      <div className={$.container}>
        <PasswordInput
          className={$['password-input']}
          proptype="controlled"
          value=""
          onChange={() => null}
          label="기존 비밀번호"
        />
        <PasswordInput
          className={$['password-input']}
          proptype="controlled"
          value=""
          onChange={() => null}
          label="새 비밀번호"
        />
        <PasswordInput
          className={$['password-input']}
          proptype="controlled"
          value=""
          onChange={() => null}
          label="새 비밀번호 확인"
        />
      </div>
      <FooterButton text="변경하기" type="button" />
    </PageLayout>
  );
}
