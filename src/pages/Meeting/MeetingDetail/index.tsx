import { useNavigate } from 'react-router-dom';
import { meetingDetailMocks } from 'src/__mocks__/meetingDetailMocks';
import ProfileCardList from 'src/components/Meeting/MeetingDetail/ProfileCardList';
import ContentBox from 'src/components/shared/ContentBox';
import FooterButton from 'src/components/shared/FooterButton';
import { PageLayout } from 'src/components/shared/Layout';

import $ from './style.module.scss';

function MeetingDetailPage() {
  const navigate = useNavigate();
  const { title, content, friends } = meetingDetailMocks;

  const handleClick = () => {
    navigate('/home/register');
  };

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
