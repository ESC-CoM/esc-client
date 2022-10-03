import { memo } from 'react';
import { useState } from 'react';
import cx from 'classnames';
import Modal from 'src/components/shared/BottomModal';
import Label from 'src/components/shared/Label';
import { MBTIType } from 'src/types/join';

import MBTIList from './MBTIList';
import $ from './style.module.scss';

type Props = {
  className?: string;
  mbti: MBTIType;
  errors?: string;
  setMBTI: (mbti: MBTIType) => void;
};

export function MBTISelect({ className, mbti, setMBTI, errors }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => setIsOpen(true);

  const handleClose = () => setIsOpen(false);

  return (
    <div className={className}>
      <Label
        textContent="MBTI"
        fontSize={15}
        htmlFor="mbti"
        errorMsg={errors}
      />
      <input
        type="button"
        className={cx($.input, {
          [$.error]: errors,
          [$.mbti]: mbti,
        })}
        value={mbti || '선택'}
        onClick={handleClick}
      />
      {isOpen && (
        <Modal
          portalId="mbti-modal"
          title="MBTI"
          onClose={() => setIsOpen(false)}
          isOpen={isOpen}
        >
          <MBTIList setMBTI={setMBTI} onClose={handleClose} />
        </Modal>
      )}
    </div>
  );
}

export default memo(MBTISelect);
