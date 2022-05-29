import { IoChevronBack } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import $ from './style.module.scss';

export default function MyPage() {
  return (
    <header className={$.container}>
      <Link className={$.link} to={'/mypage'}>
        <IoChevronBack className={$.icon} />
      </Link>
      <h1 className={$['page-title']}>설정</h1>
    </header>
  );
}
