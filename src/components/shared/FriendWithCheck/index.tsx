import Friend from 'src/components/shared/Friend';
import { BsCheckCircleFill, BsCircle } from 'react-icons/bs';
import cx from 'classnames';
import $ from './style.module.scss';
import { memo } from 'react';

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
    <div className={$['wrap']} onClick={handleClick}>
      <Friend {...{ src, name, isVertical }} padding={7} paddingLeft={15} />
      <button
        type="button"
        className={cx($['select-btn'], { [$['selected']]: isChecked })}
      >
        {isChecked ? <BsCheckCircleFill /> : <BsCircle />}
      </button>
    </div>
  );
}

export default memo(FriendWithCheck);
