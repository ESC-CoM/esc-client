import { memo } from 'react';
import BasicProfile from 'src/components/shared/Icon/BasicProfile';

import $ from './style.module.scss';

type Props = {
  id?: string;
  alt: string;
  src: string;
  width: number;
  height: number;
  onClick?: (userId: string) => void;
};

export function PersonalProfileImage({
  id,
  src,
  alt,
  width,
  height,
  onClick,
}: Props) {
  return (
    <div
      className={$['profile-img']}
      style={{ width, height }}
      onClick={() => {
        if (onClick && id) onClick(id);
      }}
    >
      {src ? <img {...{ src, alt }} /> : <BasicProfile width={width} />}
    </div>
  );
}

export default memo(PersonalProfileImage);
