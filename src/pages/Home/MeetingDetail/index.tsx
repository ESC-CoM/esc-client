import { PageLayout } from 'src/components/Layout';
import ProfileCardList from 'src/components/ProfileCardList';
import { meetingDetailMocks } from 'src/__mocks__/meetingDetailMocks';
import $ from './style.module.scss';

function MeetingDetailPage() {
  const { title, content, friends } = meetingDetailMocks;

  return (
    <PageLayout isNeedFooter={false} decreaseHeight={0}>
      <main className={$['detail-box']}>
        <ProfileCardList friends={friends} />
        <section className={$['content-box']}>
          <h2>{title}</h2>
          <span>{content}</span>
        </section>
        <button className={$['apply-btn']}>신청하기</button>
      </main>
    </PageLayout>
  );
}

export default MeetingDetailPage;
