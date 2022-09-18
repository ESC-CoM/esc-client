import { memo, useRef } from 'react';
import Badge from 'src/components/MyMeeting/Badge';
import { ProfileImg } from 'src/types/profile';
import MutiProfile from '../MultiProfile';
import $ from './style.module.scss';
import cx from 'classnames';

type TextInfo = {
  badge?: string;
  title?: string;
  content: string;
  date: string;
};

type Props = {
  className?: string;
  profileList: ProfileImg[];
  textInfo: TextInfo;
  onClick: () => void;
};

function PostCard({ className, profileList, textInfo, onClick }: Props) {
  const { badge, title, content, date } = textInfo;
  const postCardRef = useRef<HTMLLIElement | null>(null);

  return (
    <li
      className={cx($['post-card'], { [$[`${className}`]]: className })}
      onClick={onClick}
      ref={postCardRef}
    >
      <MutiProfile profileList={profileList} parentRef={postCardRef} />

      <div className={$['card-content']}>
        <div className={$['card-heading']}>
          {badge && <Badge text={badge} />}
          <span className={$.date}>{date}</span>
        </div>
        {title && <span className={$.title}>{title}</span>}
        <span className={$.content}>{content}</span>
      </div>
    </li>
  );
}

export default memo(PostCard);
