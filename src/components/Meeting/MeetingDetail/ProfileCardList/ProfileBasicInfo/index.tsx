import { IoMdFemale } from '@react-icons/all-files/io/IoMdFemale';
import { IoMdMale } from '@react-icons/all-files/io/IoMdMale';
import cx from 'classnames';

import $ from './style.module.scss';

type Props = {
  friend: Pick<res.Profile, 'mannerScore' | 'nickName' | 'gender'>;
};

function ProfileCard({ friend }: Props) {
  const { mannerScore, nickName, gender } = friend;

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
      {mannerScore && (
        <span className={cx($['manner-score'], $.text)}>{mannerScore}점</span>
      )}
    </div>
  );
}

export default ProfileCard;
