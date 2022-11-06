import { memo } from 'react';
import ProfileTag from 'src/components/shared/ProfileTag';
import { Profile } from 'src/types/profile';

import $ from './style.module.scss';

type Obj = {
  [key: string]: string | number | undefined;
};

type Props = {
  info: Obj | (string | number)[];
  fontSize?: string;
};

function ProfileTagContainer({ info, fontSize }: Props) {
  const getUnit = (key: keyof Profile) => {
    if (key === 'drink') return '병';
    if (key === 'height') return 'cm';
    if (key === 'weight') return 'kg';
    if (key === 'studentNum') return '학번';
    if (key === 'birthDate') return '년생';
    return '';
  };

  const getValue = (key: keyof Profile, value: string | number) => {
    if (key === 'drink') return +value / 10;
    return value;
  };

  return (
    <section className={$['tag-container']}>
      <div className={$['tag-list']}>
        {Object.entries(info).map(
          ([key, value], index) =>
            value && (
              <ProfileTag
                {...{ fontSize }}
                key={`${value}-${index}`}
                value={getValue(key as keyof Profile, value)}
                unit={
                  key === 'drink' && !value ? '' : getUnit(key as keyof Profile)
                }
              />
            )
        )}
      </div>
    </section>
  );
}

export default memo(ProfileTagContainer);
