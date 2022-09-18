import { UseFormSetValue } from 'react-hook-form';
import { More1Type } from 'src/types/join';

import { mbtiList } from '../../data';
import $ from './style.module.scss';

interface Props {
  setValue: UseFormSetValue<More1Type>;
  onClose: () => void;
}

export default function MbtiList({ setValue, onClose }: Props) {
  const handleClick = (value: string) => {
    onClose();
    setValue('mbti', value);
  };

  return (
    <ul className={$['mbti-list']}>
      {mbtiList.map((value, index) => (
        <li
          key={value + index}
          className={$['mbti-element']}
          onClick={() => handleClick(value)}
          tabIndex={0}
        >
          {value}
        </li>
      ))}
    </ul>
  );
}
