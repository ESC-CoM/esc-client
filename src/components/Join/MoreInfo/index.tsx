import $ from './style.module.scss';
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
    <form className={$['form']} onSubmit={handleSubmit(onSubmit)}>
      <h1>추가적인 정보</h1>

      <div className={$['item']}>
        <label htmlFor="height">키</label>
        <span className={$['required']}>*</span>

        <span className={$['info']}>
          {heightInfo.filter((mark) => height == mark.value)[0].label}
        </span>
        <input
          type="range"
          className={$['input']}
          id="height"
          min="145"
          max="190"
          step="5"
          {...register('height')}
        />
      </div>

      <div className={$['item']}>
        <label htmlFor="weight">몸무게</label>
        <span className={$['required']}>*</span>

        <span className={$['info']}>
          {weightInfo.filter((mark) => weight == mark.value)[0].label}
        </span>
        <input
          type="range"
          className={$['input']}
          id="weight"
          min="35"
          max="90"
          step="5"
          {...register('weight')}
        />
      </div>

      <div className={$['item']}>
        <label htmlFor="mbti">Mbti</label>
        <span className={$['required']}>*</span>

        <select className={$['select']} defaultValue="" {...register('mbti')}>
          <option disabled value="">
            ---선택---
          </option>
          {mbtiList.map((value) => (
            <option key={value} value={value}>
              {value}
            </option>
          ))}
        </select>
        {/* <span className={$['drop}> // Todo: icon이 select위로 올라와서 클릭이 안먹히는 이슈
              <IoMdArrowDropdown />
            </span> */}
      </div>

      <div className={$['item']}>
        <label>주량</label>
        <span className={$['required']}>*</span>

        <div>
          <Drink
            setTotalDrinkNum={(count: number) => setValue('drink', count)}
          />
          <span className={$['info']}>{drink ? `${drink}병` : '못마셔요'}</span>
        </div>
      </div>

      <div className={$['item']}>
        <label>취미</label>
        <Hobby setHobby={setHobby} />
      </div>

      <div className={$['footer']}>
        <button className={$['next-btn']} type="submit" aria-labelledby="next">
          다음
        </button>
      </div>
    </form>
  );
}
