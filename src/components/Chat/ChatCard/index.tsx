import Message from '../Message';
import ProfileImage from '../ProfileImage';
import cx from 'classnames';
import $ from './style.module.scss';
import { memo } from 'react';

interface Props {
  id: string;
  name: string;
  imagePath: string;
  content: string;
  date: string;
  clickProfile: (userId: string) => void;
}

export function ChatCard({
  id,
  name,
  imagePath,
  content,
  date,
  clickProfile,
}: Props) {
  return (
    <div className={cx($['chat-card'], $[id === 'loginid' ? 'me' : 'other'])}>
      {id === 'other' && (
        <span className={$['friend-image']} onClick={() => clickProfile(id)}>
          <ProfileImage alt={name} src={imagePath} width={35} height={35} />
        </span>
      )}
      <Message id={id} name={name} content={content} />
      <time className={$.date} dateTime={date}>
        {date}
      </time>
    </div>
  );
}

export default memo(ChatCard);
