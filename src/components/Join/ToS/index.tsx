import style from './style.module.scss';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import ToSSchema from './yup';
import { IoIosCheckboxOutline, IoIosCheckbox } from 'react-icons/io';

interface TOS {
  c1: boolean;
  c2: boolean;
}

export default function ToS() {
  const {
    control,
    watch,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<TOS>({
    resolver: yupResolver(ToSSchema),
  });

  const watchCondition = watch(['c1', 'c2'], {
    c1: false,
    c2: false,
  });

  const onSubmit = (data: TOS) => console.log(data);

  return (
    <main className={style.tos}>
      <form className={style.form} onSubmit={handleSubmit(onSubmit)}>
        <h1>회원가입 약관동의</h1>
        <section className={style.item}>
          <Controller
            name="c1"
            control={control}
            render={({ field }) =>
              !watchCondition[0] ? (
                <IoIosCheckboxOutline
                  className={style.checkbox}
                  onClick={() => setValue('c1', !watchCondition[0])}
                  {...field}
                />
              ) : (
                <IoIosCheckbox
                  className={style.checkbox}
                  onClick={() => setValue('c1', !watchCondition[0])}
                  {...field}
                />
              )
            }
          />
          <label>이용약관 동의</label>
          <span>(필수)</span>
          <span className={style.error}>{errors.c1 && errors.c1?.message}</span>
          <div className={style.content}>
            <p>약관 내용</p>
          </div>
        </section>

        <section className={style.item}>
          <Controller
            name="c2"
            control={control}
            render={({ field }) =>
              !watchCondition[1] ? (
                <IoIosCheckboxOutline
                  className={style.checkbox}
                  onClick={() => setValue('c2', !watchCondition[1])}
                  {...field}
                />
              ) : (
                <IoIosCheckbox
                  className={style.checkbox}
                  onClick={() => setValue('c2', !watchCondition[1])}
                  {...field}
                />
              )
            }
          />
          <label>개인정보 수집 및 이용 동의</label>
          <span>(필수)</span>
          <span className={style.error}>{errors.c2 && errors.c2?.message}</span>
          <div className={style.content}>
            <p>약관내용</p>
          </div>
        </section>

        <button type="submit" className={style.next_btn}>
          다음
        </button>
      </form>
    </main>
  );
}
