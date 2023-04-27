import Button from '../Button';
import $ from './style.module.scss';

interface Props {
  reset: () => void;
}

const ErrorFallback = ({ reset }: Props) => {
  return (
    <div className={$['error-fallback']}>
      <span className={$['error-message']}>오류가 발생했습니다.</span>
      <Button className={$['go-to-main-btn']} onClick={() => reset()}>
        다시 시도
      </Button>
    </div>
  );
};

export default ErrorFallback;
