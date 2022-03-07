import style from './style.module.scss';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import TermsSchema from './yup';
import { IoIosCheckboxOutline, IoIosCheckbox } from 'react-icons/io';

interface Terms {
  personalAgree: boolean;
  acceptAgree: boolean;
}

export default function Terms() {
  const {
    control,
    watch,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<Terms>({
    resolver: yupResolver(TermsSchema),
  });

  const watchCondition = watch(['personalAgree', 'acceptAgree'], {
    personalAgree: false,
    acceptAgree: false,
  });
  const [personalAgree, acceptAgree] = watchCondition;

  const onSubmit = (data: Terms) => console.log(data);

  return (
    <main className={style.terms}>
      <form className={style.form} onSubmit={handleSubmit(onSubmit)}>
        <h1>회원가입 약관동의</h1>
        <section className={style.item}>
          <Controller
            name="personalAgree"
            control={control}
            render={({ field }) =>
              !personalAgree ? (
                <IoIosCheckboxOutline
                  className={style.checkbox}
                  onClick={() => setValue('personalAgree', !personalAgree)}
                  {...field}
                />
              ) : (
                <IoIosCheckbox
                  className={style.checkbox}
                  onClick={() => setValue('personalAgree', !personalAgree)}
                  {...field}
                />
              )
            }
          />
          <strong>이용약관 동의</strong>
          <span>(필수)</span>
          <span className={style.error}>
            {errors.personalAgree && errors.personalAgree?.message}
          </span>
          <div className={style.content}>
            <p>약관 내용</p>
          </div>
        </section>

        <section className={style.item}>
          <Controller
            name="acceptAgree"
            control={control}
            render={({ field }) =>
              !acceptAgree ? (
                <IoIosCheckboxOutline
                  className={style.checkbox}
                  onClick={() => setValue('acceptAgree', !acceptAgree)}
                  {...field}
                />
              ) : (
                <IoIosCheckbox
                  className={style.checkbox}
                  onClick={() => setValue('acceptAgree', !acceptAgree)}
                  {...field}
                />
              )
            }
          />
          <strong>개인정보 수집 및 이용 동의</strong>
          <span>(필수)</span>
          <span className={style.error}>
            {errors.acceptAgree && errors.acceptAgree?.message}
          </span>
          <div className={style.content}>
            <p>약관내용</p>
          </div>
        </section>

        <button type="submit" className={style.next_btn} aria-labelledby="next">
          다음
        </button>
      </form>
    </main>
  );
}
