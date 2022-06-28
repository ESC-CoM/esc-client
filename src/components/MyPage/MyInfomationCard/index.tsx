import cx from 'classnames';
import { AiOutlineMan } from 'react-icons/ai';
import EditButton from '../EditButton';
import $ from './style.module.scss';

type Prop = {
  className: string;
};

export default function MyInformationCard({ className }: Prop) {
  return (
    <div className={cx($.container, className)}>
      <div className={$['profile-image-container']}>
        <img
          className={$['profile-image']}
          src="https://ifh.cc/g/RstlOs.jpg"
          alt="프로필 이미지"
        />
        <span className={$.mbti}>INFP</span>
      </div>
      <div className={$['information-container']}>
        <div className={$['name-container']}>
          <em className={$.name}>최현오</em>
          <AiOutlineMan className={$.icon} />
        </div>
        <ul className={$['detail-information']}>
          <li>🎓 사회과학대학 심리학과 19학번</li>
          <li>🎂 2000년 2월 6일</li>
          <li>🍺 못 마셔요</li>
        </ul>
        <div className={$['body-information']}>
          <span>키: 175cm</span>
          <span>몸무게: 59kg</span>
        </div>
      </div>
      <EditButton className={$.button} />
    </div>
  );
}
