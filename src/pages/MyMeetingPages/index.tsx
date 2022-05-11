import { RegisterDetail } from 'src/components/MyMeeting';
import { PageLayout } from 'src/components/Layout';
import { Header, MyMeetingCategory } from 'src/components/Header';
import { useLocation } from 'react-router-dom';
import RequestPage from './RequestPage';
import RegisterPage from './RegisterPage';

export default function MyMeetingPage() {
  const location = useLocation();
  const path = location.pathname;

  return (
    <PageLayout isNeedFooter={true} decreaseHeight={0}>
      <Header children={<MyMeetingCategory />} />
      {path === '/mymeeting/register-basic' && <RegisterPage />}
      {path === '/mymeeting/register-detail' && <RegisterDetail />}
      {path === '/mymeeting/request-basic' && <RequestPage />}
    </PageLayout>
  );
}