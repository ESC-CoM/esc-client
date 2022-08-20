import $ from './style.module.scss';
import cx from 'classnames';
import { FieldError, UseFormSetValue } from 'react-hook-form';
import { More1Type } from 'src/types/join';
import Modal from 'src/components/Modal';
import { useState } from 'react';
import MbtiList from './List';

interface Props {
  mbti: string;
  setValue: UseFormSetValue<More1Type>;
  errors?: FieldError;
}

export default function MbtiInput({ mbti, setValue, errors }: Props) {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <div className={$['item']}>
      <label htmlFor="mbti">{errors?.message ?? 'MBTI'}</label>
      <div className={$['item-btn']}>
        <input
          type="button"
          className={cx($[''], {
            [$['error']]: errors?.message,
            [$['mbti']]: mbti,
          })}
          value={mbti || '선택'}
          onClick={() => setIsClicked(true)}
        />
      </div>

      {isClicked && (
        <Modal
          children={
            <MbtiList
              setValue={setValue}
              toggleModal={() => setIsClicked(!isClicked)}
              onState={isClicked}
            />
          }
          toggleModal={() => setIsClicked(!isClicked)}
          onState={isClicked}
        />
      )}
    </div>
  );
}
