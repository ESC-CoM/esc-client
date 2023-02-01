import { memo, useRef } from 'react';
import { useIntersectObserver } from 'src/hooks';
import { Profile } from 'src/types/profile';

import ProfileBasicInfo from '../ProfileBasicInfo';
import ProfileTagContainer from '../ProfileTagContainer';
import $ from './style.module.scss';

type Props = {
  friend: res.Profile;
};

function ProfileCard({ friend }: Props) {
  const { nickname, birth, profileImage } = friend;
  const { university, studentId, physicalInfo, otherInfo } = friend;
  const { gender, mbti, amountOfAlchol } = otherInfo;
  const { height, weight } = physicalInfo;

  const info: Omit<
    Profile,
    'nickName' | 'img' | 'gender' | 'mannerScore' | 'department' | 'hobbies'
  > = {
    birthDate: birth,
    college: university,
    studentNum: studentId,
    height,
    weight,
    mbti,
    drink: amountOfAlchol,
  };
  const imgRef = useRef<HTMLImageElement | null>(null);

  const lazyLoadCallback = (
    entry: IntersectionObserverEntry,
    observer: IntersectionObserver
  ) => {
    const targetImg = imgRef.current;
    if (entry.isIntersecting && targetImg && targetImg.dataset.src) {
      targetImg.src = targetImg.dataset.src;
      observer.unobserve(entry.target);
    }
  };

  const profileRef = useIntersectObserver<HTMLDivElement>(lazyLoadCallback, {
    threshold: 0.1,
  });

  return (
    <div className={$['profile-card']} ref={profileRef}>
      <div className={$['img-wrapper']}>
        <img data-src={profileImage} alt="사진" ref={imgRef} />
      </div>

      <section className={$['profile-card-container']}>
        <ProfileBasicInfo friend={{ nickName: nickname, gender }} />
        <ProfileTagContainer info={info} fontSize="13px" />
      </section>
    </div>
  );
}

export default memo(ProfileCard);
