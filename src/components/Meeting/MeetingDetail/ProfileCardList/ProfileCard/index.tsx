import { memo, useRef } from 'react';
import { useIntersectObserver } from 'src/hooks';
import ProfileTagContainer from '../ProfileTagContainer';
import $ from './style.module.scss';
import ProfileBasicInfo from '../ProfileBasicInfo';

type Props = {
  friend: res.Profile;
};

function ProfileCard({ friend }: Props) {
  const { img, mannerScore, nickName, gender, birthDate } = friend;
  const { college, department, studentNum } = friend;
  const { height, weight, mbti, hobbies, drink } = friend;
  const profileRef = useRef<HTMLDivElement | null>(null);
  const imgRef = useRef<HTMLImageElement | null>(null);

  const info: Omit<res.Profile, 'nickName' | 'img' | 'gender' | 'hobbies'> = {
    college,
    department,
    studentNum,
    birthDate,
    height,
    weight,
    mbti,
    drink,
  };

  const lazyLoadCallback = (
    entries: IntersectionObserverEntry[],
    observer: IntersectionObserver
  ) => {
    const targetBox = entries[0];
    const targetImg = imgRef.current;
    if (targetBox.isIntersecting && targetImg && targetImg.dataset.src) {
      targetImg.src = targetImg.dataset.src;
      observer.unobserve(targetBox.target);
    }
  };

  useIntersectObserver<HTMLDivElement>(
    { threshold: 0.1 },
    profileRef,
    lazyLoadCallback
  );

  return (
    <div className={$['profile-card']} ref={profileRef}>
      <div className={$['img-wrapper']}>
        <img data-src={img} alt="사진" ref={imgRef} />
      </div>

      <section className={$['profile-card-container']}>
        <ProfileBasicInfo friend={{ nickName, gender, mannerScore }} />

        <ProfileTagContainer title="자기소개" info={info} fontSize="13px" />
        {hobbies && (
          <ProfileTagContainer
            title="취미소개"
            info={hobbies}
            fontSize="13px"
          />
        )}
      </section>
    </div>
  );
}

export default memo(ProfileCard);
