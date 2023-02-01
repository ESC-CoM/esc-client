import { useRef } from 'react';
import { useIntersect } from 'src/hooks';
import { ProfileImg } from 'src/types/profile';
import getProfileClassName from 'src/utils/getProfileClassName';

import $ from './style.module.scss';

interface Props {
  profileList: ProfileImg[];
}

const FALLBACK_IMAGE =
  'https://ninajohansson.se/wp-content/themes/koji/assets/images/default-fallback-image.png';

export default function MutiProfile({ profileList }: Props) {
  const imgRefs = useRef<HTMLImageElement[]>([]);

  const onError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.onerror = null;
    e.currentTarget.src = FALLBACK_IMAGE;
  };

  const lazyLoadCallback = (
    entry: IntersectionObserverEntry,
    observer: IntersectionObserver
  ) => {
    if (entry.isIntersecting) {
      imgRefs.current.forEach((img) => {
        if (img && img.dataset.src) img.src = img.dataset.src;
      });
      observer.unobserve(entry.target);
    }
  };

  const parentRef = useIntersect<HTMLDivElement>(lazyLoadCallback, {
    threshold: 0.1,
  });

  return (
    <div
      className={$[`${getProfileClassName(profileList.length)}`]}
      ref={parentRef}
    >
      {profileList.map(({ alt, src }, index) => (
        <div key={`${src}${index}`} className={$['personal-img']}>
          <img
            data-src={src}
            alt={`${alt}의 프로필 사진`}
            onError={onError}
            ref={(el) => (imgRefs.current[index] = el as HTMLImageElement)}
          />
        </div>
      ))}
    </div>
  );
}
