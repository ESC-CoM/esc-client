import { useEffect, useState } from 'react';
import { memo } from 'react';
import { IoClose } from 'react-icons/io5';
import { BasicSection, MoreSection } from 'src/components/PersonalProfile';
import ProfileBackgound from 'src/components/shared/Icon/ProfileBackgound.svg';
import { basicInfoInit, moreInfoInit } from 'src/constants/personalProfile';
import { BasicInfoType, MoreInfoType } from 'src/types/profile';

import { basicInfoMock, moreInfoMock } from './profile';
import $ from './style.module.scss';

interface Props {
  closeModal: () => void;
}

export function PersonalProfilePage({ closeModal }: Props) {
  const [basicInfo, setBasicInfo] = useState<BasicInfoType>(basicInfoInit);
  const [moreInfo, setMoreInfo] = useState<MoreInfoType>(moreInfoInit);

  useEffect(() => {
    setBasicInfo(basicInfoMock);
    setMoreInfo(moreInfoMock);
  }, []);

  return (
    <section className={$['profile-box']}>
      <img
        className={$['profile-box-background-img']}
        src={ProfileBackgound}
        alt="프로필 배경 이미지"
        draggable="false"
      />
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
