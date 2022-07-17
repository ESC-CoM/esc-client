import $ from './style.module.scss';
import BasicProfile from 'src/components/Icon/BasicProfile';

interface Props {
  alt: string;
  src: string;
  width: number;
  height: number;
}

export default function ProfileImage({ alt, src, width, height }: Props) {
  return (
    <div className={$['profile-img']} style={{ width: width, height: height }}>
      {src ? <img src={src} alt={`${alt}의 프로필 사진`} /> : <BasicProfile />}
    </div>
  );
}
