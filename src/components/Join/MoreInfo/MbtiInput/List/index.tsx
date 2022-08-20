import $ from './style.module.scss';
import { UseFormSetValue } from 'react-hook-form';
import { More1Type } from 'src/types/join';
import { mbtiList } from '../../data';

interface Props {
  setValue: UseFormSetValue<More1Type>;
  onState: boolean;
  toggleModal: () => void;
}

export default function MbtiList({ setValue, onState, toggleModal }: Props) {
  return (
    <div className={$['mbti-list']}>
      {mbtiList.map((value, index) => (
        <span
          key={value + index}
          className={$['mbti-element']}
          onClick={() => {
            if (onState) {
              toggleModal();
              setValue('mbti', value);
            }
          }}
        >
          {value}
        </span>
      ))}
    </div>
  );
}
