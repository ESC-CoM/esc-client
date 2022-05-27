import $ from './style.module.scss';

interface Props {
  imagePath: string;
}

export default function ProfileImage({ imagePath }: Props) {
  return (
    <div className={$['profile-img']}>
      <img src={imagePath} alt="profile-image" />
    </div>
  );
}
