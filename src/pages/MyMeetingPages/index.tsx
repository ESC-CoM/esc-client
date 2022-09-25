import { useLocation } from 'react-router-dom';
import { PageLayout } from 'src/components/shared/Layout';
import seatchParams from 'src/utils/searchParams';

import RegisterDetailPage from './RegisterDetailPage';
import RegisterPage from './RegisterPage';
import RequestPage from './RequestPage';

export default function MyMeetingPage() {
  const location = useLocation();
  const path = location.pathname;
  const queryString = location.search;
  const keyword = seatchParams(queryString, 'status');

  return (
    <PageLayout isNeedFooter={true} headerHeight={84}>
      {path === '/mymeeting' && keyword === 'register' && <RegisterPage />}
      {path === '/mymeeting/detail' && <RegisterDetailPage />}
      {path === '/mymeeting' && keyword === 'request' && <RequestPage />}
    </PageLayout>
  );
}
