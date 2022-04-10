import style from './style.module.scss';
import { useForm } from 'react-hook-form';
import { MoreSchema } from '../../../types/join';
// import { IoMdArrowDropdown } from 'react-icons/io'; // Todo: icon이 select위로 올라와서 클릭이 안먹히는 이슈 -> 158line 참고
import Hobby from './Hobby';
import Drink from './Drink/drink';
import { mbtiList, heightInfo, weightInfo } from './data';

export default function MoreInfo() {
  const { watch, setValue, register, handleSubmit } = useForm<MoreSchema>({
    defaultValues: {
      height: 165,
      weight: 60,
    },
  });
  const [height, weight, drink] = watch(
    ['height', 'weight', 'drink', 'hobbies'],
    {
      height: 165,
      weight: 60,
      drink: 0,
    }
  );

  const setHobby = (hobbyList: string[]) => {
    setValue('hobbies', hobbyList);
  };

  const onSubmit = (data: MoreSchema) => console.log(data);

  return (
    <form className={style.form} onSubmit={handleSubmit(onSubmit)}>
      <h1>추가적인 정보</h1>
      <div className={style.item}>
        <label htmlFor="height">키</label>
        <span className={style.required}>*</span>
        <span className={style.info}>
          {heightInfo.filter((mark) => height == mark.value)[0].label}
        </span>
        <input
          type="range"
          className={style.input}
          id="height"
          min="145"
          max="190"
          step="5"
          {...register('height')}
        />
      </div>
      <div className={style.item}>
        <label htmlFor="weight">몸무게</label>
        <span className={style.required}>*</span>
        <span className={style.info}>
          {weightInfo.filter((mark) => weight == mark.value)[0].label}
        </span>
        <input
          type="range"
          className={style.input}
          id="weight"
          min="35"
          max="90"
          step="5"
          {...register('weight')}
        />
      </div>
      <div className={style.item}>
        <label htmlFor="mbti">Mbti</label>
        <span className={style.required}>*</span>
        <select className={style.select} defaultValue="" {...register('mbti')}>
          <option disabled value="">
            ---선택---
          </option>
          {mbtiList.map((value) => (
            <option key={value} value={value}>
              {value}
            </option>
          ))}
        </select>
        {/* <span className={style.drop}> // Todo: icon이 select위로 올라와서 클릭이 안먹히는 이슈
              <IoMdArrowDropdown />
            </span> */}
      </div>

      <div className={style.item}>
        <label>주량</label>
        <span className={style.required}>*</span>
        <div>
          <Drink
            setTotalDrinkNum={(count: number) => setValue('drink', count)}
          />
          <span className={style.info}>
            {drink ? `${drink}병` : '못마셔요'}
          </span>
        </div>
      </div>
      <div className={style.item}>
        <label>취미</label>
        <Hobby setHobby={setHobby} />
      </div>
      <div className={style.footer}>
        <button className={style.next_btn} type="submit" aria-labelledby="next">
          다음
        </button>
      </div>
    </form>
  );
}
