import $ from './style.module.scss';
import { ProfileImage } from 'src/components/Chat/ProfileImage';
import { BasicInfoType } from 'src/types/profile';
import { IoMdMale, IoMdFemale } from 'react-icons/io';

interface Props {
  basicInfo: BasicInfoType;
}

export default function BasicSection({ basicInfo }: Props) {
  const { img, nickName, gender, college, department, studentNum } = basicInfo;

  return (
    <section className={$['basic-section']}>
      <ProfileImage src={img} alt={nickName} width={110} height={110} />

      <div className={$['right']}>
        <div className={$['user-info']}>
          <em className={$['nick-name']}>{nickName}</em>
          <span className={$['gender']}>
            {gender === '남' ? (
              <IoMdMale className={$['male']} />
            ) : (
              <IoMdFemale className={$['female']} />
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
