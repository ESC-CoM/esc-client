import { RefObject, useRef } from 'react';
import { useIntersectObserver } from 'src/hooks';
import getProfileClassName from 'src/utils/getProfileClassName';
import { ProfileImg } from 'src/types/profile';
import $ from './style.module.scss';

interface Props {
  profileList: ProfileImg[];
  parentRef: RefObject<HTMLLIElement>;
}

const FALLBACK_IMAGE =
  'https://ninajohansson.se/wp-content/themes/koji/assets/images/default-fallback-image.png';

export default function MutiProfile({ profileList, parentRef }: Props) {
  const imgRefs = useRef<HTMLImageElement[]>([]);

  const onError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.onerror = null;
    e.currentTarget.src = FALLBACK_IMAGE;
  };

  const lazyLoadCallback = (
    entries: IntersectionObserverEntry[],
    observer: IntersectionObserver
  ) => {
    const targetBox = entries[0];
    if (targetBox.isIntersecting) {
      imgRefs.current.forEach((img) => {
        if (img && img.dataset.src) img.src = img.dataset.src;
      });
      observer.unobserve(targetBox.target);
    }
  };

  useIntersectObserver<HTMLLIElement>(
    { threshold: 0.1 },
    parentRef,
    lazyLoadCallback
  );

  return (
    <div className={$[`${getProfileClassName(profileList.length)}`]}>
      {profileList.map(({ alt, src }, index) => (
        <div key={`${src}${index}`} className={$['personal-img']}>
          <img
            src={src}
            alt={`${alt}의 프로필 사진`}
            onError={onError}
            ref={(el) => (imgRefs.current[index] = el as HTMLImageElement)}
          />
        </div>
      ))}
    </div>
  );
}
