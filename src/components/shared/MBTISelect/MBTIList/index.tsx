import MBTI_LIST from 'src/constants/MBTI';

import $ from './style.module.scss';

type Props = {
  setMBTI: (mbti: string) => void;
  onClose: () => void;
};

export default function MBTIList({ setMBTI, onClose }: Props) {
  const handleClick = (value: string) => {
    onClose();
    setMBTI(value);
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
