import { meetingDetailMocks } from 'src/__mocks__/meetingDetailMocks';
import ProfileCardList from 'src/components/Meeting/MeetingDetail/ProfileCardList';
import ContentBox from 'src/components/shared/ContentBox';
import { PageLayout } from 'src/components/shared/Layout';

import $ from './style.module.scss';
import FooterButton from 'src/components/shared/FooterButton';

function MeetingDetailPage() {
  const { title, content, friends } = meetingDetailMocks;

  return (
    <PageLayout isNeedFooter={false} decreaseHeight={54}>
      <main className={$['detail-box']}>
        <ProfileCardList friends={friends} />
        <ContentBox {...{ title, content }} isReadMode />
      </main>
      <FooterButton text="신청하기" type="button" />
    </PageLayout>
  );
}

export default MeetingDetailPage;
