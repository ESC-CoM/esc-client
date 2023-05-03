import { CardBox } from 'src/components/MyPage';
import AsyncWrapper from 'src/components/shared/AsyncWrapper';
import ErrorFallback from 'src/components/shared/ErrorFallback';
import Spinner from 'src/components/shared/Spinner';

import { PageLayout } from '../../components/shared/Layout';

export default function MyPage() {
  return (
    <PageLayout isNeedFooter={true} headerHeight={44}>
      <AsyncWrapper
        errorFallback={ErrorFallback}
        suspenseFallback={<Spinner />}
      >
        <CardBox />
      </AsyncWrapper>
    </PageLayout>
  );
}
