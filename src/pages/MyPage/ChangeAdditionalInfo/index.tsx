import Input from 'src/components/shared/Input';
import InputWithButton from 'src/components/shared/InputWithButton';
import { PageLayout } from 'src/components/shared/Layout';

import $ from './style.module.scss';

export default function ChangeAdditionalInfo() {
  return (
    <PageLayout isNeedFooter={false} headerHeight={44}>
      <div className={$.container}>
        <InputWithButton
          type="text"
          proptype="controlled"
          onClick={() => console.log('clicked')}
          onChange={() => console.log('changed')}
          label="별명"
          buttonText="중복 확인"
          placeholder="최소 2자, 최대 10자"
          value=""
        />
        <Input
          type="number"
          proptype="controlled"
          onChange={() => console.log('changed')}
          label="태어난 년도"
          placeholder="년도(4자)"
          value=""
        />
      </div>
    </PageLayout>
  );
}
