import $ from './style.module.scss';
import { useEffect, useState } from 'react';
import { basicInfoMock, moreInfoMock } from './profile';
import { IoClose } from 'react-icons/io5';
import { memo } from 'react';
import { BasicSection, MoreSection } from 'src/components/PersonalProfile';
import { BasicInfoType, MoreInfoType } from 'src/types/profile';
import ProfileBackgound from 'src/components/shared/Icon/ProfileBackgound.svg';

interface Props {
  closeModal: () => void;
}

export function PersonalProfilePage({ closeModal }: Props) {
  const [basicInfo, setBasicInfo] = useState<BasicInfoType>({
    img: '',
    nickName: '',
    gender: '',
    college: '',
    department: '',
    studentNum: '',
  });
  const [moreInfo, setMoreInfo] = useState<MoreInfoType>({
    birthDate: '',
    height: '',
    weight: '',
    mbti: '',
    drink: 0,
  });

  useEffect(() => {
    setBasicInfo(basicInfoMock);
    setMoreInfo(moreInfoMock);
  }, []);

  return (
    <section
      className={$['profile-box']}
      style={{
        backgroundImage: `url(${ProfileBackgound})`,
      }}
    >
      <div className={$['close-profile']} onClick={closeModal}>
        <button className={$['close-btn']}>
          <IoClose />
        </button>
      </div>
      <div className={$['profile']}>
        <BasicSection basicInfo={basicInfo} />
        <MoreSection moreInfo={moreInfo} />
      </div>
    </section>
  );
}

export default memo(PersonalProfilePage);
