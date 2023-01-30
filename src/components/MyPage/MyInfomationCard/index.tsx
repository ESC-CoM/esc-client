import { AiOutlineMan } from '@react-icons/all-files/ai/AiOutlineMan';
import { AiOutlineWoman } from '@react-icons/all-files/ai/AiOutlineWoman';
import { IoIosArrowForward } from '@react-icons/all-files/io/IoIosArrowForward';
import { IoBeer } from '@react-icons/all-files/io5/IoBeer';
import { IoBody } from '@react-icons/all-files/io5/IoBody';
import { RiCake2Fill } from '@react-icons/all-files/ri/RiCake2Fill';
import cx from 'classnames';
import { Link } from 'react-router-dom';
import { OutlineSchool } from 'src/components/shared/Icon';
import { WeightScale } from 'src/components/shared/Icon';
import PersonalProfileImage from 'src/components/shared/PersonalProfileImage';

import InformationBar from '../InformationBar';
import $ from './style.module.scss';

type Props = {
  className: string;
  userInfo: res.UserInfoDetailSuccess;
};

export default function MyInformationCard({ className, userInfo }: Props) {
  const {
    userInfo: {
      nickname,
      birth,
      profileImage,
      schoolInfo,
      otherInfo: { amountOfAlchol, mbti, gender },
      physicalInfo: { height, weight },
    },
  } = userInfo;

  const schoolText = schoolInfo
    ? schoolInfo.university + ' ' + schoolInfo.major
    : '학생증 인증 후 확인할 수 있습니다.';

  return (
    <Link className={cx($.container, className)} to="./change/additional-info">
      <div className={$['left-box']}>
        <div className={$['profile-image-container']}>
          <PersonalProfileImage
            alt="프로필"
            src={profileImage}
            width={60}
            height={60}
          />
          <span className={$.mbti}>{mbti}</span>
        </div>
        <div className={$['information-container']}>
          <div className={$['name-container']}>
            <em className={$.name}>{nickname}</em>
            {gender === 'men' ? (
              <AiOutlineMan className={cx($.icon, $['man-icon'])} />
            ) : (
              <AiOutlineWoman className={cx($.icon, $['woman-icon'])} />
            )}
          </div>
          <ul>
            <InformationBar icon={OutlineSchool} text={schoolText} />
            <InformationBar icon={RiCake2Fill} text={`${birth}년생`} />
            <InformationBar icon={IoBeer} text={`${amountOfAlchol / 10}병`} />
          </ul>
          <ul className={$['body-information']}>
            <InformationBar
              className={$.item}
              icon={IoBody}
              text={`${height.toString()}cm`}
            />
            <InformationBar
              className={$.item}
              icon={WeightScale}
              text={`${weight.toString()}kg`}
            />
          </ul>
        </div>
      </div>
      <IoIosArrowForward className={$.button} />
    </Link>
  );
}
