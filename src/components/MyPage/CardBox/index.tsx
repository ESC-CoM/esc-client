import { Link } from 'react-router-dom';
import MyInformationCard from '../MyInfomationCard';
import { IoIosArrowForward } from 'react-icons/io';
import $ from './style.module.scss';

export default function CardBox() {
  return (
    <div className={$.container}>
      <section>
        <h2 className={$['card-title']}>기본 프로필</h2>
        <MyInformationCard className={$.card} />
      </section>
      <section>
        <h2 className={$['card-title']}>계정 정보</h2>
        <Link to="" className={$['setting-bar']}>
          <span className={$.title}>기본 정보 수정</span>
          <IoIosArrowForward className={$.button} />
        </Link>
        <Link to="" className={$['setting-bar']}>
          <span className={$.title}>학사 정보 수정</span>
          <IoIosArrowForward className={$.button} />
        </Link>
      </section>
      <section>
        <h2 className={$['card-title']}>기타</h2>
        <Link to="" className={$['setting-bar']}>
          <span className={$.title}>친구 초대</span>
          <IoIosArrowForward className={$.button} />
        </Link>
      </section>
    </div>
  );
}
