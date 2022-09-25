import { memo } from 'react';
import ProfileTag from 'src/components/shared/ProfileTag';

import $ from './style.module.scss';

type Obj = {
  [key: string]: string | number | undefined;
};

type Props = {
  title: string;
  info: Obj | (string | number)[];
  fontSize?: string;
};

function ProfileTagContainer({ title, info, fontSize }: Props) {
  const getUnit = (key: keyof res.Profile) => {
    if (key === 'drink') return '병';
    if (key === 'height') return 'cm';
    if (key === 'weight') return 'kg';
    if (key === 'studentNum') return '학번';
    if (key === 'birthDate') return '년생';
    if (key === 'mannerScore') return '점';
    return '';
  };

  return (
    <section className={$['tag-container']}>
      <span className={$['title']}>{title}</span>
      <div className={$['tag-list']}>
        {Object.entries(info).map(
          ([key, value], index) =>
            value && (
              <ProfileTag
                {...{ fontSize }}
                key={`${value}-${index}`}
                value={key === 'drink' && !value ? '못마셔요' : value}
                unit={
                  key === 'drink' && !value
                    ? ''
                    : getUnit(key as keyof res.Profile)
                }
              />
            )
        )}
      </div>
    </section>
  );
}

export default memo(ProfileTagContainer);
