import { useRouter } from 'next/router';
import ProfileCardList from 'src/components/Meeting/MeetingDetail/ProfileCardList';
import ContentBox from 'src/components/shared/ContentBox';
import FooterButton from 'src/components/shared/FooterButton';
import { PageLayout } from 'src/components/shared/Layout';
import { useMeetingItemDetailQuery } from 'src/hooks/api/home';

import $ from './style.module.scss';
const initialBoard = {
  title: '',
  content: '',
  participants: [],
};

function MeetingDetailPage() {
  const router = useRouter();
  const { id: boardId } = router.query;

  const handleClick = () => {
    router.push(`/home/apply/${boardId}`);
  };

  const { data } = useMeetingItemDetailQuery(+(boardId || 0));
  const { title, content, participants: friends } = data || initialBoard;

  return (
    <PageLayout isNeedFooter={false} decreaseHeight={54}>
      <main className={$['detail-box']}>
        <ProfileCardList friends={friends} />
        <ContentBox {...{ title, content }} isReadMode />
      </main>
      <FooterButton text="신청하기" type="button" onClick={handleClick} />
    </PageLayout>
  );
}

export default MeetingDetailPage;
