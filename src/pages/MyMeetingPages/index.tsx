import { useLocation } from 'react-router-dom';
import { PageLayout } from 'src/components/shared/Layout';

import RegisterDetailPage from './RegisterDetailPage';
import RegisterPage from './RegisterPage';
import RequestPage from './RequestPage';

export default function MyMeetingPage() {
  const location = useLocation();
  const path = location.pathname;

  return (
    <PageLayout isNeedFooter={true} headerHeight={84}>
      {path === '/mymeeting/register/basic' && <RegisterPage />}
      {path === '/mymeeting/register/detail' && <RegisterDetailPage />}
      {path === '/mymeeting/request/basic' && <RequestPage />}
    </PageLayout>
  );
}
