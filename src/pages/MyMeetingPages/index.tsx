import { PageLayout } from 'src/components/Layout';
import { useLocation } from 'react-router-dom';
import RequestPage from './RequestPage';
import RegisterPage from './RegisterPage';
import RegisterDetailPage from './RegisterDetailPage';

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
