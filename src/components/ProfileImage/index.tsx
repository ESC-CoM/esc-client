import $ from './style.module.scss';
type ProfileInfo = {
  altValue: string;
  imageUrl: string;
};

interface Props {
  profileList: ProfileInfo[];
  className: string;
}

export default function ProfileImage({ profileList, className }: Props) {
  return (
    <div className={$[`${className}`]}>
      {profileList.map(({ altValue, imageUrl }, index) => (
        <div key={`${imageUrl}${index}`} className={$['personal-img']}>
          <img src={imageUrl} alt={`${altValue}의 프로필 사진`} />
        </div>
      ))}
    </div>
  );
}
