import { PageLayout } from 'src/components/shared/Layout';
import { useSearch } from 'src/hooks';

import RegisterDetailPage from './RegisterDetailPage';
import RegisterPage from './RegisterPage';
import RequestPage from './RequestPage';

export default function MyMeetingPage() {
  const path = location.pathname;
  const keyword = useSearch('status');

  return (
    <PageLayout isNeedFooter={true} headerHeight={84}>
      {path === '/mymeeting' && keyword === 'register' && <RegisterPage />}
      {path === '/mymeeting/detail' && <RegisterDetailPage />}
      {path === '/mymeeting' && keyword === 'request' && <RequestPage />}
    </PageLayout>
  );
}
