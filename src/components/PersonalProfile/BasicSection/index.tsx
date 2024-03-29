import { IoMdFemale } from '@react-icons/all-files/io/IoMdFemale';
import { IoMdMale } from '@react-icons/all-files/io/IoMdMale';
import { PersonalProfileImage } from 'src/components/shared/PersonalProfileImage';
import { BasicInfoType } from 'src/types/profile';

import $ from './style.module.scss';

interface Props {
  basicInfo: BasicInfoType;
}

export default function BasicSection({ basicInfo }: Props) {
  const { img, nickName, gender, college, department, studentNum } = basicInfo;

  return (
    <section className={$['basic-section']}>
      <PersonalProfileImage
        src={img}
        alt={`${nickName}님의 프로필`}
        width={110}
        height={110}
      />

      <div className={$.right}>
        <div className={$['user-info']}>
          <em className={$['nick-name']}>{nickName}</em>
          <span className={$.gender}>
            {gender === '남' ? (
              <IoMdMale className={$.male} />
            ) : (
              <IoMdFemale className={$.female} />
            )}
          </span>
        </div>

        <div className={$['school-info']}>
          <span>
            {college}&nbsp;{department}
          </span>
          <span>{studentNum}</span>
        </div>
      </div>
    </section>
  );
}
