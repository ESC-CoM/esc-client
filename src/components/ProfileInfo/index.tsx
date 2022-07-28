import $ from './style.module.scss';
import { Link } from 'react-router-dom';
import { Profile } from 'src/types/profile';
import ChatIcon from 'src/components/Icon/ChatIcon';

interface Props {
  profile: Profile;
}

export default function ProfileInfo({ profile }: Props) {
  return (
    <>
      <article className={$['school-info']}>
        <span>{profile.name}</span>
      </article>

      <article className={$['school-info']}>
        <span>{profile.college}</span>
        <span>{profile.department}</span>
        <span>{profile.studentNum}</span>
      </article>

      <article className={$['birth-info']}>
        <span>{profile.birthDate}</span>
      </article>

      <article className={$['drink-info']}>
        <span>{profile.drink ? `${profile.drink}병` : '못마셔요'}</span>
      </article>

      <article className={$['body-info']}>
        <span>{profile.height}cm</span>
        <span>{profile.weight}kg</span>
      </article>

      <article className={$['chat-box']}>
        <Link to="chat/" className={$['chat-link']}>
          <span>{<ChatIcon />}</span>
          <span>대화하기</span>
        </Link>
      </article>
    </>
  );
}
