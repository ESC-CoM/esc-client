import $ from './style.module.scss';
import ProfileTag from 'src/components/ProfileTag';
import { MoreInfoType } from 'src/types/profile';

interface Props {
  moreInfo: MoreInfoType;
}

export default function MoreSection({ moreInfo }: Props) {
  const getUnit = (key: string) => {
    if (key === 'drink') return '병';
    if (key === 'height') return 'cm';
    if (key === 'weight') return 'kg';
    return '';
  };

  return (
    <section className={$['more-section']}>
      {Object.entries(moreInfo).map(([key, value], index) => (
        <ProfileTag
          key={`${value}-${index}`}
          value={key === 'drink' && !value ? '못마셔요' : value}
          unit={key === 'drink' && !value ? '' : getUnit(key)}
        />
      ))}
    </section>
  );
}
