import { PageLayout } from 'src/components/shared/Layout';

import $ from './style.module.scss';

export default function ChangeAdditionalInfo() {
  return (
    <PageLayout isNeedFooter={false} headerHeight={44}>
      <div className={$.container}>추가 정보 수정 페이지</div>
    </PageLayout>
  );
}
