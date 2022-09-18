import { IoClose } from 'react-icons/io5';

import $ from './style.module.scss';

interface Props {
  onClick?: () => void;
}

export default function CloseButton({ onClick }: Props) {
  const handleClick = () => {
    if (onClick) onClick();
  };

  return (
    <button
      className={$['close-button']}
      type="button"
      aria-label="닫기 버튼"
      onClick={handleClick}
    >
      <IoClose size={25} />
    </button>
  );
}
