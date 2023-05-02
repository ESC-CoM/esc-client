import AsyncWrapper from 'src/components/shared/AsyncWrapper';
import ErrorFallback from 'src/components/shared/ErrorFallback';
import { PageLayout } from 'src/components/shared/Layout';
import Spinner from 'src/components/shared/Spinner';
import { useSearch } from 'src/hooks';

import RegisterDetailPage from './RegisterDetailPage';
import RegisterPage from './RegisterPage';
import RequestPage from './RequestPage';

export default function MyMeetingPage() {
  const path = location.pathname;
  const keyword = useSearch('status');

  return (
    <PageLayout isNeedFooter={true} headerHeight={84}>
      <AsyncWrapper
        errorFallback={ErrorFallback}
        suspenseFallback={<Spinner />}
      >
        <>
          {path === '/mymeeting' && keyword === 'register' && <RegisterPage />}
          {path === '/mymeeting/detail' && <RegisterDetailPage />}
          {path === '/mymeeting' && keyword === 'request' && <RequestPage />}
        </>
      </AsyncWrapper>
    </PageLayout>
  );
}
