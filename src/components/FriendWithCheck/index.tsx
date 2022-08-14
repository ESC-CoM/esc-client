import { memo } from 'react';
import cx from 'classnames';
import {
  RiCheckboxCircleFill,
  RiCheckboxBlankCircleLine,
} from 'react-icons/ri';
import $ from './style.module.scss';

interface Props {
  isChecked: boolean;
  src: string;
  name: string;
  isVertical: boolean;
  onClick: () => void;
}

function FriendWithCheck({ isChecked, src, name, isVertical, onClick }: Props) {
  return (
    <div
      className={cx($['friend'], { [$['vertical-shape']]: isVertical })}
      onClick={onClick}
    >
      <div className={$['left-box']}>
        <div className={$['img-wrapper']}>
          <img draggable={false} alt={name + '프로필 이미지'} src={src} />
        </div>
        <em>{name}</em>
      </div>
      {isChecked ? (
        <RiCheckboxCircleFill className={$['checked-icon']} />
      ) : (
        <RiCheckboxBlankCircleLine className={$['uncheck-icon']} />
      )}
    </div>
  );
}

export default memo(FriendWithCheck);
