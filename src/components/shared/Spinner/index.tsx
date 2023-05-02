import { FaSpinner } from '@react-icons/all-files/fa/FaSpinner';

import $ from './style.module.scss';

function Spinner() {
  return (
    <div className={$.spinner}>
      <FaSpinner className={$['loading-icon']} />
    </div>
  );
}

export default Spinner;
