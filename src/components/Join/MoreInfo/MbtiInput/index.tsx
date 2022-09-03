import $ from './style.module.scss';
import cx from 'classnames';
import { FieldError, UseFormSetValue } from 'react-hook-form';
import { More1Type } from 'src/types/join';
import Modal from 'src/components/shared/BottomModal';
import { useState } from 'react';
import MbtiList from './MbtiList';

interface Props {
  mbti: string;
  setValue: UseFormSetValue<More1Type>;
  errors?: FieldError;
}

export default function MbtiInput({ mbti, setValue, errors }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(true);
  };

  return (
    <div className={$['item']}>
      <label htmlFor="mbti">{errors?.message ?? 'MBTI'}</label>
      <div className={$['item-btn']}>
        <input
          type="button"
          className={cx({
            [$['error']]: errors?.message,
            [$['mbti']]: mbti,
          })}
          value={mbti || '선택'}
          onClick={handleClick}
        />
      </div>

      {isOpen && (
        <Modal
          portalId="mbti-modal"
          title="MBTI"
          children={
            <MbtiList setValue={setValue} onClose={() => setIsOpen(!isOpen)} />
          }
          onClose={() => setIsOpen(!isOpen)}
          isOpen={isOpen}
        />
      )}
    </div>
  );
}
