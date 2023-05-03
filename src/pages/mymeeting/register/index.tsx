import RegisterMeetingList from 'src/components/MyMeeting/RegisterMeetingList';
import AsyncWrapper from 'src/components/shared/AsyncWrapper';
import ErrorFallback from 'src/components/shared/ErrorFallback';
import { PageLayout } from 'src/components/shared/Layout';
import Spinner from 'src/components/shared/Spinner';

export default function RegisterPage() {
  return (
    <PageLayout isNeedFooter={true} headerHeight={84}>
      <AsyncWrapper
        errorFallback={ErrorFallback}
        suspenseFallback={<Spinner />}
      >
        <RegisterMeetingList />
      </AsyncWrapper>
    </PageLayout>
  );
}
