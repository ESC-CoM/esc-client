import MBTI_LIST from 'src/constants/MBTI';
import { MBTIType } from 'src/types/join';

import $ from './style.module.scss';

type Props = {
  setMBTI: (mbti: MBTIType) => void;
  onClose: () => void;
};

export default function MBTIList({ setMBTI, onClose }: Props) {
  const handleClick = (value: string) => {
    onClose();
    setMBTI(value as MBTIType);
  };

  return (
    <ul>
      {MBTI_LIST.map((value) => (
        <li
          key={value}
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
