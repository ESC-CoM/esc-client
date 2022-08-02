import { memo, useState } from 'react';
import cx from 'classnames';
import {
  RiCheckboxCircleFill,
  RiCheckboxBlankCircleLine,
} from 'react-icons/ri';
import $ from './style.module.scss';

interface Props {
  id: number;
  src: string;
  name: string;
  isVertical: boolean;
  addSelectedFriends: (id: number) => void;
  removeSelectedFriends: (id: number) => void;
  padding?: number;
  paddingLeft?: number;
}

function FriendWithCheck({
  id,
  src,
  name,
  isVertical,
  padding = 0,
  paddingLeft = 0,
  addSelectedFriends,
  removeSelectedFriends,
}: Props) {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheck = () => {
    if (isChecked) {
      removeSelectedFriends(id);
      setIsChecked(false);
      return;
    }
    addSelectedFriends(id);
    setIsChecked(true);
  };

  return (
    <div
      style={{ padding: `${padding}px`, paddingLeft: `${paddingLeft}px` }}
      className={cx($['friend'], { [$['vertical-shape']]: isVertical })}
      onClick={handleCheck}
    >
      <div className={$['left-box']}>
        <div className={$['img-wrapper']}>
          <img alt={name + '프로필 이미지'} src={src} />
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
