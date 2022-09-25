import FooterButton from 'src/components/shared/FooterButton';
import Input from 'src/components/shared/Input';
import { PageLayout } from 'src/components/shared/Layout';

import $ from './style.module.scss';

export default function ChangeEmail() {
  return (
    <PageLayout isNeedFooter={false} headerHeight={44}>
      <div className={$.container}>
        <p className={$.discription}>새로운 이메일 주소를 인증해주세요.</p>
        <Input
          className={$['email-input']}
          proptype="controlled"
          value=""
          placeholder="example@email.com"
          onChange={() => null}
          label="이메일"
        />
      </div>
      <FooterButton text="인증 메일 받기" type="button" />
    </PageLayout>
  );
}
