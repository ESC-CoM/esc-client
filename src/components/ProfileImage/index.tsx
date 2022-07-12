import $ from './style.module.scss';
type ProfileInfo = {
  alt: string;
  src: string;
};

interface Props {
  profileList: ProfileInfo[];
  className: string;
}

export default function ProfileImage({ profileList, className }: Props) {
  return (
    <div className={$[`${className}`]}>
      {profileList.map(({ alt, src }, index) => (
        <div key={`${src}${index}`} className={$['personal-img']}>
          <img src={src} alt={`${alt}의 프로필 사진`} />
        </div>
      ))}
    </div>
  );
}
