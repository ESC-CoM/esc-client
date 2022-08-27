import { useNavigate } from 'react-router-dom';
import $ from './style.module.scss';

const NEXT_PATH = '/login';
export default function Welcome() {
  // TODO: 배경 이미지 바꾸기
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(NEXT_PATH);
  };

  return (
    <section className={$.welcome}>
      <img
        src="https://user-images.githubusercontent.com/63364990/187017663-1aafbaaa-82c4-4ba4-ac28-9f81ea566ca3.png"
        alt="welcome-background-img"
      />
      <div className={$.content}>
        <h1 className={$.title}>회원가입을 환영합니다!</h1>
        <div>
          <p>블루스프링 가입이 완료되었습니다. </p>
          <p>내정보에서 원하는 항목의 공개유무를 설정해보세요!</p>
        </div>
        <button className={$['start-btn']} onClick={handleClick}>
          블루스프링 시작하기
        </button>
      </div>
    </section>
  );
}
