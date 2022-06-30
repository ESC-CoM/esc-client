import ContentBox from 'src/components/ContentBox';
import { PageLayout } from 'src/components/Layout';
import ProfileCardList from 'src/components/ProfileCardList';
import { meetingDetailMocks } from 'src/__mocks__/meetingDetailMocks';
import $ from './style.module.scss';

function MeetingDetailPage() {
  const { title, content, friends } = meetingDetailMocks;

  return (
    <PageLayout isNeedFooter={false}>
      <main className={$['detail-box']}>
        <ProfileCardList friends={friends} />
        <ContentBox {...{ title, content }} isReadMode />
        <button className={$['apply-btn']}>신청하기</button>
      </main>
    </PageLayout>
  );
}

export default MeetingDetailPage;
