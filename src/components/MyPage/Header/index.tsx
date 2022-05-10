import { BsFillGearFill } from 'react-icons/bs';
import { MdPeopleOutline } from 'react-icons/md';
import $ from './style.module.scss';

export default function Header() {
  return (
    <header className={$.container}>
      <h1 className={$['page-title']}>내 정보</h1>
      <div className={$['icon-container']}>
        <button type="button" aria-label="친구 보기">
          <MdPeopleOutline className={$.icon} />
        </button>
        <button type="button" aria-label="설정">
          <BsFillGearFill className={$.icon} />
        </button>
      </div>
    </header>
  );
}
