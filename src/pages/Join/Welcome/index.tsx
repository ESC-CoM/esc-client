import $ from './style.module.scss';
import { PageLayout } from 'src/components/shared/Layout';
import { useNavigate } from 'react-router-dom';
import Paragraph from 'src/components/shared/Paragraph';
import Button from 'src/components/shared/Button';
import WelcomeIcon from 'src/components/shared/Icon/WelcomeIcon';

const NEXT_PATH = '/login';
const contents = [
  '블루스프링 가입이 완료되었습니다.',
  '내정보에서 원하는 항목의 공개유무를 설정해보세요!',
];

export default function WelcomePage() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(NEXT_PATH);
  };

  return (
    <PageLayout isNeedFooter={false} decreaseHeight={0}>
      <section className={$.welcome}>
        <WelcomeIcon />
        <div className={$.content}>
          <h1 className={$.title}>회원가입을 환영합니다!</h1>
          <Paragraph contents={contents} />
          <Button
            contentText="블루스프링 시작하기"
            width="80%"
            onClick={handleClick}
          />
        </div>
      </section>
    </PageLayout>
  );
}
