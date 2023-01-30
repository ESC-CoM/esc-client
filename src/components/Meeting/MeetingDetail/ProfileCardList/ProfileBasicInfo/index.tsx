import { IoMdFemale } from '@react-icons/all-files/io/IoMdFemale';
import { IoMdMale } from '@react-icons/all-files/io/IoMdMale';
import cx from 'classnames';
import { Profile } from 'src/types/profile';

import $ from './style.module.scss';

type Props = {
  friend: Pick<Profile, 'nickName' | 'gender'>;
};

function ProfileCard({ friend }: Props) {
  const { nickName, gender } = friend;

  return (
    <div className={$['basic-info']}>
      <span className={$.text}>{nickName}</span>
      <span className={cx($.gender, $.text)}>
        {gender === '남' ? (
          <IoMdMale className={$['gender-male']} />
        ) : (
          <IoMdFemale className={$['gender-female']} />
        )}
      </span>
    </div>
  );
}

export default ProfileCard;
