import $ from './style.module.scss';
import cx from 'classnames';
import { FieldError, UseFormSetValue } from 'react-hook-form';
import { More1Type } from 'src/types/join';
import { memo } from 'react';
import Label from 'src/components/shared/Label';
import Modal from 'src/components/shared/BottomModal';
import { useState } from 'react';
import MbtiList from './MbtiList';

interface Props {
  mbti: string;
  setValue: UseFormSetValue<More1Type>;
  errors?: FieldError;
}

export function MbtiInput({ mbti, setValue, errors }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(true);
  };

  return (
    <div className={$['item']}>
      <Label
        textContent="MBTI"
        fontSize={15}
        htmlFor="mbti"
        errorMsg={errors?.message}
      />
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

export default memo(MbtiInput);
