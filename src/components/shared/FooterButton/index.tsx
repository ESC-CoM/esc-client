import $ from './style.module.scss';

interface Props {
  text: string;
  type: 'submit' | 'button';
  onClick?: () => void;
}

export default function FooterButton({ text, type, onClick }: Props) {
  const handleClick = () => onClick && onClick();

  return (
    <div className={$.footer}>
      <button
        className={$.button}
        type={type}
        aria-label={text}
        onClick={handleClick}
      >
        {text}
      </button>
    </div>
  );
}
