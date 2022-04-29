import { RegisterDetail } from 'src/components/MyMeeting';
import { PageLayout } from 'src/components/Layout';
import { Header } from 'src/components/Header';

export default function RegisterMeetingDetailPage() {
  return (
    <PageLayout isNeedFooter={true} decreaseHeight={0}>
      <Header />
      <RegisterDetail />
    </PageLayout>
  );
}
