import style from './style.module.scss';
import { useForm } from 'react-hook-form';
import { MoreSchema } from '../../../types/join';
// import { IoMdArrowDropdown } from 'react-icons/io'; // Todo: icon이 select위로 올라와서 클릭이 안먹히는 이슈 -> 158line 참고
import Hobby from './Hobby';
import { useState } from 'react';
import Drink from './Drink/drink';
import { mbtiList, heightInfo, weightInfo } from './data';

export default function MoreInfo() {
  const { watch, register, setValue, handleSubmit } = useForm<MoreSchema>({
    defaultValues: {
      height: 170,
      weight: 65,
    },
  });

  const [hobbyList, setHobbyList] = useState<Array<string>>([]);
  const addHobby = (hobby: string) => {
    setHobbyList([...hobbyList, hobby]);
    setValue('hobby', hobbyList);
  };

  // Todo: 입력한 range범위까지 색상채울 지 말지 결정하기
  // const coloring = (e: React.FormEvent<HTMLInputElement>) => {
  //   console.log(e.currentTarget.value);
  //   const value =
  //     (+e.currentTarget.value - +e.currentTarget.min) /
  //     (+e.currentTarget.max - +e.currentTarget.min);
  //   console.log(value);

  // e.currentTarget.style.backgroundImage =
  //   '-webkit-gradient(linear, left top, right top, ' +
  //   'color-stop(' +
  //   value +
  //   ', #ff5c66), ' +
  //   'color-stop(' +
  //   value +
  //   ', #eeeeee)' +
  //   ')';
  // };

  const onSubmit = (data: MoreSchema) => console.log(data);

  return (
    <>
      <form className={style.form} onSubmit={handleSubmit(onSubmit)}>
        <h1>추가적인 정보</h1>
        <div className={style.item}>
          <label htmlFor="height">키</label>
          <span className={style.required}>*</span>
          <span className={style.info}>
            {
              heightInfo.filter((mark) => watch('height') == mark.value)[0]
                .label
            }
          </span>
          <input
            type="range"
            className={style.input}
            id="height"
            min="145"
            max="190"
            step="5"
            // onInput={coloring}
            {...register('height')}
          />
        </div>
        <div className={style.item}>
          <label htmlFor="weight">몸무게</label>
          <span className={style.required}>*</span>
          <span className={style.info}>
            {
              weightInfo.filter((mark) => watch('weight') == mark.value)[0]
                .label
            }
          </span>
          <input
            type="range"
            className={style.input}
            id="weight"
            min="35"
            max="90"
            step="5"
            // onInput={coloring}
            {...register('weight')}
          />
        </div>
        <div className={style.item}>
          <label htmlFor="mbti">Mbti</label>
          <span className={style.required}>*</span>
          <select
            className={style.select}
            defaultValue=""
            {...register('mbti')}
          >
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
              {watch('drink') ? watch('drink') + '병' : '못마셔요'}
            </span>
          </div>
        </div>
        <div className={style.item}>
          <label>취미</label>
          <Hobby addHobby={addHobby} />
        </div>
        <div className={style.footer}>
          <button
            className={style.next_btn}
            type="submit"
            aria-labelledby="next"
          >
            확인
          </button>
        </div>
      </form>
    </>
  );
}
