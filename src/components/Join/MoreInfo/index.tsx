import style from './style.module.scss';
import { useForm } from 'react-hook-form';
import { MoreInterface } from '../../../types/join';
// import { IoMdArrowDropdown } from 'react-icons/io'; // Todo: icon이 select위로 올라와서 클릭이 안먹히는 이슈 -> 158line 참고
import Hobby from './Hobby';
import { useState } from 'react';
import Drink from './Drink/drink';

export default function MoreInfo() {
  const { watch, register, setValue, handleSubmit } = useForm<MoreInterface>({
    defaultValues: {
      height: 170,
      weight: 65,
    },
  });

  const mbtiList = [
    'ENFP',
    'ENFJ',
    'ENTP',
    'ENTJ',
    'ESFP',
    'ESFJ',
    'ESTP',
    'ESTJ',
    'INFP',
    'INFJ',
    'INTP',
    'INTJ',
    'ISFP',
    'ISFJ',
    'ISTP',
    'ISTJ',
  ];

  const hLabel = Array.from({ length: 10 }, (_, index) => {
    if (!index)
      return {
        value: 145,
        label: '150cm 이하',
      };
    else if (index === 9)
      return {
        value: 190,
        label: '190cm 이상',
      };
    return {
      value: 145 + 5 * index,
      label: `${145 + 5 * index}cm ~ ${145 + 5 * (index + 1)}cm`,
    };
  });

  const wLabel = Array.from({ length: 12 }, (_, index) => {
    if (!index)
      return {
        value: 35,
        label: '40kg 이하',
      };
    else if (index === 11)
      return {
        value: 90,
        label: '90kg 이상',
      };
    return {
      value: 35 + 5 * index,
      label: `${35 + 5 * index}kg ~ ${35 + 5 * (index + 1)}kg`,
    };
  });
  const [hobbyList, setHobbyList] = useState<Array<string>>([]);
  const onSetHobby = (hobby: string) => {
    setHobbyList([...hobbyList, hobby]);
    setValue('hobby', hobbyList);
  };

  // const coloring = (e: React.FormEvent<HTMLInputElement>) => {
  //   console.log(e.currentTarget.value);
  //   const value =
  //     (+e.currentTarget.value - +e.currentTarget.min) /
  //     (+e.currentTarget.max - +e.currentTarget.min);
  //   console.log(value);

  // Todo: 입력한 range범위까지 색상채울 지 말지 결정하기
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

  const onSubmit = (data: MoreInterface) => console.log(data);

  return (
    <>
      <div className={style.more}>
        <form className={style.form} onSubmit={handleSubmit(onSubmit)}>
          <h1>추가적인 정보</h1>
          <div className={style.item}>
            <label htmlFor="height">키</label>
            <span className={style.info}>
              {hLabel.filter((mark) => watch('height') == mark.value)[0].label}
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
            <span className={style.info}>
              {wLabel.filter((mark) => watch('weight') == mark.value)[0].label}
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
            <div className={style.row} draggable="false">
              <Drink onSetDrink={(count: number) => setValue('drink', count)} />
              <span className={style.info}>
                {watch('drink') ? watch('drink') + '병' : '못마셔요'}
              </span>
            </div>
          </div>
          <div className={style.item}>
            <label>취미</label>
            <Hobby onSetHobby={onSetHobby} />
          </div>
          <button
            className={style.next_btn}
            type="submit"
            aria-labelledby="next"
          >
            확인
          </button>
        </form>
      </div>
    </>
  );
}
