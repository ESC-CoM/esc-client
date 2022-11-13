import { memo } from 'react';
import cx from 'classnames';
import PersonalProfileImage from 'src/components/shared/PersonalProfileImage';

import Message from '../Message';
import $ from './style.module.scss';

interface Props {
  name: string;
  senderId: number;
  imagePath: string;
  isMe: boolean;
  content: string;
  date: string;
  clickProfile: (userId: number) => void;
}

export function ChatCard({
  name,
  senderId,
  imagePath,
  isMe,
  content,
  date,
  clickProfile,
}: Props) {
  return (
    <div className={cx($['chat-card'], $[isMe ? 'me' : 'other'])}>
      {!isMe && (
        <PersonalProfileImage
          id={senderId}
          alt={`${name}님의 프로필`}
          src={imagePath}
          width={35}
          height={35}
          onClick={clickProfile}
        />
      )}
      <Message {...{ name, content, isMe }} />
      <time className={$.date} dateTime={date}>
        {date}
      </time>
    </div>
  );
}

export default memo(ChatCard);
