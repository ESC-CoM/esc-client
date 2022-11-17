import { memo } from 'react';
import cx from 'classnames';
import PersonalProfileImage from 'src/components/shared/PersonalProfileImage';

import Message from '../Message';
import $ from './style.module.scss';

interface Props {
  id: string;
  name: string;
  imagePath: string;
  content: string;
  date: string;
  clickProfile: (userId: string) => void;
}

export function MessageCard({
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
        <PersonalProfileImage
          id={id}
          alt={`${name}님의 프로필`}
          src={imagePath}
          width={35}
          height={35}
          onClick={clickProfile}
        />
      )}
      <Message id={id} name={name} content={content} />
      <time className={$.date} dateTime={date}>
        {date}
      </time>
    </div>
  );
}

export default memo(MessageCard);
