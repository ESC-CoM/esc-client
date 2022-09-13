import { meetingDetailMocks } from 'src/__mocks__/meetingDetailMocks';
import ProfileCardList from 'src/components/Meeting/MeetingDetail/ProfileCardList';
import ContentBox from 'src/components/shared/ContentBox';
import { PageLayout } from 'src/components/shared/Layout';

import $ from './style.module.scss';

function MeetingDetailPage() {
  const { title, content, friends } = meetingDetailMocks;

  return (
    <PageLayout isNeedFooter={false} decreaseHeight={54}>
      <main className={$['detail-box']}>
        <ProfileCardList friends={friends} />
        <ContentBox {...{ title, content }} isReadMode />
      </main>
      <footer className={$['apply-btn']}>
        <button type="button">신청하기</button>
      </footer>
    </PageLayout>
  );
}

export default MeetingDetailPage;
