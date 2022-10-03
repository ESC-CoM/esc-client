import { memo } from 'react';
import BasicProfile from 'src/components/shared/Icon/BasicProfile';

import $ from './style.module.scss';

type Props = {
  id?: string;
  userName: string;
  src: string;
  width: number;
  height: number;
  onClick?: (userId: string) => void;
};

export function PersonalProfileImage({
  id,
  userName,
  src,
  width,
  height,
  onClick,
}: Props) {
  return (
    <div
      className={$['profile-img']}
      style={{ width: width, height: height }}
      onClick={() => {
        if (onClick && id) onClick(id);
      }}
    >
      {src ? (
        <img src={src} alt={`${userName}의 프로필 사진`} />
      ) : (
        <BasicProfile width={width} />
      )}
    </div>
  );
}

export default memo(PersonalProfileImage);
