import $ from './style.module.scss';

interface Props {
  text: string;
  onClick?: () => void;
}

export default function NextButton({ text, onClick }: Props) {
  return (
    <div className={$['footer']}>
      <button
        className={$['next-btn']}
        type="submit"
        aria-labelledby="next"
        onClick={() => onClick && onClick()}
      >
        {text}
      </button>
    </div>
  );
}
