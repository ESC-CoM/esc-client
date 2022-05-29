import { BsGear } from 'react-icons/bs';
import { MdPeopleOutline } from 'react-icons/md';
import { Link } from 'react-router-dom';
import $ from './style.module.scss';

export default function MyPage() {
  return (
    <header className={$.container}>
      <h1 className={$['page-title']}>내 정보</h1>
      <div className={$['icon-container']}>
        <button type="button" aria-label="친구 보기">
          <MdPeopleOutline className={$.icon} />
        </button>
        <Link to={'/setting'}>
          <BsGear className={$.icon} />
        </Link>
      </div>
    </header>
  );
}
