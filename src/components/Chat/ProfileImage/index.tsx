import $ from './style.module.scss';

interface Props {
  altValue: string;
  imagePath: string;
}

export default function ProfileImage({ altValue, imagePath }: Props) {
  return (
    <div className={$['profile-img']}>
      <img src={imagePath} alt={`${altValue}의 프로필 사진`} />
    </div>
  );
}
