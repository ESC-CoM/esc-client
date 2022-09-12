import $ from './style.module.scss';

interface Props {
  contentText: string;
  width?: string;
  fontSize?: number;
  onClick?: () => void;
}

export default function Button({
  contentText,
  width,
  fontSize,
  onClick,
}: Props) {
  const handleClick = () => {
    if (onClick) onClick();
  };

  return (
    <button
      className={$.button}
      style={{ width, fontSize }}
      onClick={handleClick}
    >
      {contentText}
    </button>
  );
}
