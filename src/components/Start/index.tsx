import style from './style.module.scss';

function Start() {
  return (
    <div className={style.mainContainer}>
      <h1 className={style.title}>충북대학교 과팅</h1>
      <h2 className={style.subTitle}>지금 시작하시겠어요?</h2>
      <img
        className={style.mainImage}
        src="https://www.chungbuk.ac.kr/resource/site/pr/images/contents/cnt1830_img01.jpg"
        alt="demo logo"
      />
      <div className={style.buttonContainer}>
        <button
          className={style.button}
          type="button"
          aria-label="start button"
        >
          시작하기
        </button>
        <button
          className={style.button}
          type="button"
          aria-label="login button"
        >
          로그인
        </button>
      </div>
    </div>
  );
}

export default Start;
