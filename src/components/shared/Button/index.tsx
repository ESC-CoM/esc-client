import $ from './style.module.scss';

interface Props {
  type?: 'button' | 'submit' | 'reset';
  contentText: string;
  width?: string;
  fontSize?: number;
  onClick?: () => void;
}

export default function Button({
  type = 'button',
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
      type={type}
      style={{ width, fontSize }}
      onClick={handleClick}
    >
      {contentText}
    </button>
  );
}
