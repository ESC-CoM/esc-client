import InputWithButton from 'src/components/shared/InputWithButton';
import { PageLayout } from 'src/components/shared/Layout';

import $ from './style.module.scss';

export default function ChangePhone() {
  return (
    <PageLayout isNeedFooter={false} headerHeight={44}>
      <div className={$.container}>
        <InputWithButton
          onClick={() => console.log('clicked')}
          labelText="휴대폰 번호"
          buttonText="인증번호 받기"
        />
      </div>
    </PageLayout>
  );
}
