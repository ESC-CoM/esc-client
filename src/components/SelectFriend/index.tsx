import Friend from 'src/components/Friend';
import { BsCheckCircleFill, BsCircle } from 'react-icons/bs';
import cx from 'classnames';
import $ from './style.module.scss';
import { memo, useState } from 'react';

interface Props {
  src: string;
  name: string;
  isVertical: boolean;
}

function SelectFriend({ src, name, isVertical }: Props) {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <div
      className={$['wrap']}
      onClick={() => setIsClicked((isClicked) => !isClicked)}
    >
      <Friend {...{ src, name, isVertical }} padding={7} />
      <button
        type="button"
        className={cx($['select-btn'], { [$['clicked']]: isClicked })}
      >
        {isClicked ? <BsCheckCircleFill /> : <BsCircle />}
      </button>
    </div>
  );
}

export default memo(SelectFriend);
