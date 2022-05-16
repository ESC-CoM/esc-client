import { GrNext } from 'react-icons/gr';
import { MdPeopleOutline } from 'react-icons/md';
import $ from './style.module.scss';

export default function MannerScoreBar() {
  return (
    <div className={$.container}>
      <div className={$['manner-score-container']}>
        <h2 className={$['title']}>매너점수</h2>
        <div className={$['outer-circle']}>
          <div className={$['inner-circle']}>
            <em className={$['manner-score']}>4.5</em>
          </div>
        </div>
      </div>
      <div className={$['manner-review-container']}>
        <h2 className={$['title']}>받은 메너 평가</h2>
        <div className={$['review-count-container']}>
          <MdPeopleOutline className={$.icon} />
          <em className={$.count}>3</em>
        </div>
        <span className={$['total-review']}>친절하고 메너가 좋아요</span>
      </div>
      <div className={$['button-container']}>
        <button type="button" aria-label="매너점수 상세보기">
          <GrNext className={$.icon} />
        </button>
      </div>
    </div>
  );
}
