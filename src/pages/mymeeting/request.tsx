import RequestMeetingList from 'src/components/MyMeeting/RequestMeetingList';
import AsyncWrapper from 'src/components/shared/AsyncWrapper';
import ErrorFallback from 'src/components/shared/ErrorFallback';
import { PageLayout } from 'src/components/shared/Layout';
import Spinner from 'src/components/shared/Spinner';

export default function RequestPage() {
  return (
    <PageLayout isNeedFooter={true} headerHeight={84}>
      <AsyncWrapper
        errorFallback={ErrorFallback}
        suspenseFallback={<Spinner />}
      >
        <RequestMeetingList />
      </AsyncWrapper>
    </PageLayout>
  );
}
