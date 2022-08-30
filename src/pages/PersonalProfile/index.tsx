import $ from './style.module.scss';
import { useEffect, useState } from 'react';
import { Profile } from 'src/types/profile';
import { profileInfo } from './profile';
import { ProfileImage } from 'src/components/Chat';
import ProfileInfo from 'src/components/ProfileInfo';
import { IoClose } from 'react-icons/io5';
import { memo } from 'react';

const initProfile = () => {
  return {
    img: '',
    name: '',
    gender: '',
    birthDate: '',
    college: '',
    department: '',
    studentNum: '',
    height: 0,
    weight: 0,
    mbti: '',
    drink: 0,
    mannerScore: 0,
  };
};

interface Props {
  closeModal: () => void;
}

export function PersonalProfilePage({ closeModal }: Props) {
  const [profile, setProfile] = useState<Profile>(initProfile());

  useEffect(() => {
    setProfile(profileInfo);
  }, []);

  return (
    <section className={$['profile-box']}>
      <div className={$['close-profile']} onClick={closeModal}>
        <button className={$['close-btn']}>
          <IoClose size={25} />
        </button>
      </div>
      <div className={$['profile']}>
        <ProfileImage
          src={profile.img}
          alt={profile.name}
          width={80}
          height={80}
        />
        <ProfileInfo profile={profile} />
      </div>
    </section>
  );
}

export default memo(PersonalProfilePage);
