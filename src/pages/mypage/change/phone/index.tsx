import { ChangeEventHandler, useState } from 'react';
import FooterButton from 'src/components/shared/FooterButton';
import InputWithButton from 'src/components/shared/InputWithButton';
import InputWithTimer from 'src/components/shared/InputWithTimer';
import { PageLayout } from 'src/components/shared/Layout';
import { insertAutoHyphen } from 'src/utils';

import $ from './style.module.scss';

export default function ChangePhonePage() {
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleChangePhoneNumber: ChangeEventHandler<HTMLInputElement> = ({
    target: { value },
  }) => insertAutoHyphen({ phoneNumber: value, setPhoneNumber });

  return (
    <PageLayout isNeedFooter={false} headerHeight={44}>
      <div className={$.container}>
        <p className={$.discription}>
          전화번호 변경을 위해
          <br /> 새로운 전화번호를 인증해주세요.
        </p>
        <InputWithButton
          proptype="controlled"
          value={phoneNumber}
          onChange={handleChangePhoneNumber}
          onClick={() => console.log('clicked')}
          label="휴대폰 번호"
          type="text"
          buttonText="인증번호 받기"
        />
        <InputWithTimer
          type="number"
          className={$['auth-number-input']}
          proptype="controlled"
          value=""
          onChange={() => null}
          label="인증번호"
        />
        <FooterButton type="button" text="전화번호 바꾸기" />
      </div>
    </PageLayout>
  );
}
