import { memo } from 'react';
import { FaCheckCircle } from '@react-icons/all-files/fa/FaCheckCircle';
import { FaRegCircle } from '@react-icons/all-files/fa/FaRegCircle';
import cx from 'classnames';
import Friend from 'src/components/shared/Friend';

import $ from './style.module.scss';

interface Props {
  src: string;
  name: string;
  isVertical: boolean;
  isChecked: boolean;
  handleClick: () => void;
}

function FriendWithCheck(friendProps: Props) {
  const { src, name, isVertical, isChecked, handleClick } = friendProps;
  return (
    <div className={$.wrap} onClick={handleClick}>
      <Friend {...{ src, name, isVertical }} padding={7} paddingLeft={15} />
      <button
        type="button"
        className={cx($['select-btn'], { [$.selected]: isChecked })}
      >
        {isChecked ? <FaCheckCircle /> : <FaRegCircle />}
      </button>
    </div>
  );
}

export default memo(FriendWithCheck);
