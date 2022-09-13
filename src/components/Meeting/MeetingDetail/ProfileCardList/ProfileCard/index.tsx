import { memo, useRef } from 'react';
import { useIntersectObserver } from 'src/hooks';
import { Profile } from 'src/types/profile';

import $ from './style.module.scss';

type Props = {
  friend: Profile;
  profileWidth: number | undefined;
};

function ProfileCard({ friend, profileWidth }: Props) {
  const profileRef = useRef<HTMLDivElement | null>(null);
  const imgRef = useRef<HTMLImageElement | null>(null);

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
          <img data-src={friend.img} alt="사진" ref={imgRef} />
        </div>
        <table>
          <tbody>
            <tr>
              <td>매너점수</td>
              <td className={$['bold']}>{friend.mannerScore}점</td>
            </tr>
            <tr>
              <td className={friend.gender === '남' ? $.male : $.female}>
                {friend.gender}
              </td>
              <td>{friend.birthDate.split('-')[0]}년생</td>
            </tr>
            <tr>
              <td>{friend.college}</td>
              <td>{friend.studentNum}학번</td>
            </tr>
            <tr>
              <td>{friend.height}cm</td>
              <td>{friend.weight}kg</td>
            </tr>
            <tr>
              <td>MBTI</td>
              <td>{friend.mbti}</td>
            </tr>
            <tr>
              <td>주량</td>
              <td>{friend.drink}병</td>
            </tr>
            <tr>
              <td>취미</td>
              <td className={$['hobbies']}>{friend.hobbies}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default memo(ProfileCard);
