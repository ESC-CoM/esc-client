import $ from './style.module.scss';

interface Props {
  text: string;
  onClick: () => void;
}

export default function FooterButton({ text, onClick }: Props) {
  const handleClick = () => onClick();

  return (
    <div className={$.footer}>
      <button
        className={$.button}
        type="button"
        aria-label={text}
        onClick={handleClick}
      >
        {text}
      </button>
    </div>
  );
}
