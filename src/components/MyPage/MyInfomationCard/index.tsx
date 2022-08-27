import cx from 'classnames';
import { AiOutlineMan } from 'react-icons/ai';
import { MdOutlineSchool } from 'react-icons/md';
import { RiCake2Fill } from 'react-icons/ri';
import { IoBeer, IoBody } from 'react-icons/io5';
import { IoIosArrowForward } from 'react-icons/io';
import { GiWeightScale } from 'react-icons/gi';
import $ from './style.module.scss';
import { ProfileImage } from 'src/components/Chat/ProfileImage';

type Prop = {
  className: string;
};

const MOCK_URL =
  'https://img.freepik.com/free-photo/3d-rendering-zoom-call-avatar_23-2149556779.jpg?w=2000&t=st=1661578223~exp=1661578823~hmac=fcbafec28b2bc396b64f33424ed8fb434b852ba0e36ecddada0b49950562de78' as const;

export default function MyInformationCard({ className }: Prop) {
  return (
    <div className={cx($.container, className)}>
      <div className={$['left-box']}>
        <div className={$['profile-image-container']}>
          <ProfileImage alt={''} src={MOCK_URL} width={60} height={60} />
          <span className={$.mbti}>INFP</span>
        </div>
        <div className={$['information-container']}>
          <div className={$['name-container']}>
            <em className={$.name}>최현오</em>
            <AiOutlineMan className={$.icon} />
          </div>
          <ul className={$['detail-information']}>
            <li>
              <MdOutlineSchool /> 사회과학대학 심리학과 19학번
            </li>
            <li>
              <RiCake2Fill /> 2000년 2월 6일
            </li>
            <li>
              <IoBeer /> 못 마셔요
            </li>
          </ul>
          <div className={$['body-information']}>
            <span>
              <IoBody /> 175cm
            </span>
            <span>
              <GiWeightScale /> 59kg
            </span>
          </div>
        </div>
      </div>
      <IoIosArrowForward className={$.button} />
    </div>
  );
}
