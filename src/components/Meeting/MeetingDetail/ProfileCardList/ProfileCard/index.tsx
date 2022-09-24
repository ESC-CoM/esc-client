import { memo, useRef } from 'react';
import { IoMdFemale } from '@react-icons/all-files/io/IoMdFemale';
import { IoMdMale } from '@react-icons/all-files/io/IoMdMale';
import { useIntersectObserver } from 'src/hooks';
import ProfileTagContainer from '../ProfileTagContainer';
import $ from './style.module.scss';
import cx from 'classnames';

type Props = {
  friend: res.Profile;
  profileWidth: number | undefined;
};

function ProfileCard({ friend, profileWidth }: Props) {
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
    <div className={$['slide-view']}>
      <div
        className={$['profile-card']}
        style={{ width: `${profileWidth}px` }}
        ref={profileRef}
      >
        <div className={$['img-wrapper']}>
          <img data-src={img} alt="사진" ref={imgRef} />
        </div>

        <section className={$['profile-card-container']}>
          <div className={$['basic-info']}>
            <span className={$['text']}>{nickName}</span>
            <span className={cx($['gender'], $['text'])}>
              {gender === '남' ? (
                <IoMdMale className={$['gender-male']} />
              ) : (
                <IoMdFemale className={$['gender-female']} />
              )}
            </span>
            {mannerScore && (
              <span className={cx($['manner-score'], $['text'])}>
                {mannerScore}점
              </span>
            )}
          </div>

          <ProfileTagContainer title="자기소개" info={info} fontSize="13px" />
          {hobbies && <ProfileTagContainer title="취미소개" info={hobbies} />}
        </section>
      </div>
    </div>
  );
}

export default memo(ProfileCard);
