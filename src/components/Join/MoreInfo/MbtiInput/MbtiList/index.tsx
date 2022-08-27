import $ from './style.module.scss';
import { UseFormSetValue } from 'react-hook-form';
import { More1Type } from 'src/types/join';
import { mbtiList } from '../../data';

interface Props {
  setValue: UseFormSetValue<More1Type>;
  toggleModal: () => void;
}

export default function MbtiList({ setValue, toggleModal }: Props) {
  const handleClick = (value: string) => {
    toggleModal();
    setValue('mbti', value);
  };

  return (
    <ul className={$['mbti-list']}>
      {mbtiList.map((value, index) => (
        <li
          key={value + index}
          className={$['mbti-element']}
          onClick={() => handleClick(value)}
        >
          {value}
        </li>
      ))}
    </ul>
  );
}
