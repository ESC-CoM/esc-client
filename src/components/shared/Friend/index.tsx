import { memo } from 'react';
import cx from 'classnames';

import $ from './style.module.scss';

interface Props {
  src: string;
  name: string;
  isVertical: boolean;
  padding?: number;
  paddingLeft?: number;
}

function Friend(friendProps: Props) {
  const { src, name, isVertical, padding = 0, paddingLeft = 0 } = friendProps;
  return (
    <div
      style={{ padding: `${padding}px`, paddingLeft: `${paddingLeft}px` }}
      className={cx($['friend'], { [$['vertical-shape']]: isVertical })}
      onClick={(e) => {
        e.stopPropagation();
        console.log('profile');
      }}
    >
      <div className={$['img-wrapper']}>
        <img alt={name + '프로필 이미지'} src={src} />
      </div>
      <em>{name}</em>
    </div>
  );
}

export default memo(Friend);
