import { MdRefresh } from '@react-icons/all-files/md/MdRefresh';

import $ from './style.module.scss';

interface Props {
  reset: () => void;
}

function ErrorFallback({ reset }: Props) {
  return (
    <div className={$['error-fallback']}>
      <span className={$['error-message']}>오류가 발생했습니다.</span>
      <button onClick={() => reset()}>
        <MdRefresh className={$['reset-icon']} />
      </button>
    </div>
  );
}

export default ErrorFallback;
