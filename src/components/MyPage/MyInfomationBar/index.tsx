import { AiOutlineMan } from 'react-icons/ai';
import { GrNext } from 'react-icons/gr';
import $ from './style.module.scss';

export default function MyInformationBar() {
  return (
    <div className={$.container}>
      <div className={$['profile-image-container']}>
        <img
          className={$['profile-image']}
          src="https://ifh.cc/g/RstlOs.jpg"
          alt="프로필 이미지"
        />
        <button
          className={$['change-profile-image-button']}
          type="button"
          aria-label="프로필 사진 변경"
        >
          프로필 사진 변경
        </button>
      </div>
      <div className={$['information-container']}>
        <div className={$['name-container']}>
          <em className={$.name}>최현오</em>
          <AiOutlineMan className={$.icon} />
        </div>
        <span className={$['detail-information']}>
          사회과학대학 심리학과 19학번
        </span>
      </div>
      <div className={$['button-container']}>
        <button type="button" aria-label="프로필 정보 상세보기">
          <GrNext className={$.icon} />
        </button>
      </div>
    </div>
  );
}
