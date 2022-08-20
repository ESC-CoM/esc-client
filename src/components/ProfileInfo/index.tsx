import $ from './style.module.scss';
import { Profile } from 'src/types/profile';

interface Props {
  profile: Profile;
}

export default function ProfileInfo({ profile }: Props) {
  return (
    <>
      <div className={$['info']}>
        <span>{profile.name}</span>
      </div>

      <div className={$['info']}>
        <span>{profile.college}</span>
        <span>{profile.department}</span>
        <span>{profile.studentNum}</span>
      </div>

      <div className={$['info']}>
        <span>{profile.birthDate}</span>
      </div>

      <div className={$['info']}>
        <span>{profile.drink ? `${profile.drink}병` : '못마셔요'}</span>
      </div>

      <div className={($['body-info'], $['info'])}>
        <span>{profile.height}cm</span>
        <span>{profile.weight}kg</span>
      </div>
    </>
  );
}
