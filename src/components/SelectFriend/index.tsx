import Friend from 'src/components/Friend';
import { BsCheckCircleFill, BsCircle } from 'react-icons/bs';
import cx from 'classnames';
import $ from './style.module.scss';
import { memo } from 'react';

interface Props {
  src: string;
  name: string;
  isVertical: boolean;
  isSelected: boolean;
}

function SelectFriend({ src, name, isVertical, isSelected }: Props) {
  return (
    <div className={$['wrap']}>
      <Friend {...{ src, name, isVertical }} padding={7} paddingLeft={15} />
      <button
        type="button"
        className={cx($['select-btn'], { [$['selected']]: isSelected })}
      >
        {isSelected ? <BsCheckCircleFill /> : <BsCircle />}
      </button>
    </div>
  );
}

export default memo(SelectFriend);
