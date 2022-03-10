import style from './style.module.scss';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import TermsSchema from './yup';
import { FiCheck, FiChevronRight } from 'react-icons/fi';
import { useEffect, useState } from 'react';

interface Terms {
  // Todo: types 파일에 옮기기
  [index: string]: boolean;
  personalAgree: boolean;
  acceptAgree: boolean;
}

type State = {
  onState: boolean;
  onClickToggleModal: () => void;
};

export default function Terms({ onState, onClickToggleModal }: State) {
  const {
    control,
    register,
    handleSubmit,
    reset,
    getValues,
    setValue,
    formState: { errors },
  } = useForm<Terms>({
    defaultValues: {
      personalAgree: false,
      acceptAgree: false,
    },
    resolver: yupResolver(TermsSchema),
  });

  const terms = [
    // Todo: mocks데이터로 옮기기
    {
      title: '이용약관 동의(필수)',
      url: 'http://1',
    },
    {
      title: '개인정보 수집 및 이용 동의(필수)',
      url: 'http://2',
    },
  ];
  // const personalAgree = register('personalAgree', { required: true });

  const termsValue = (idx: number) => (!idx ? 'personalAgree' : 'acceptAgree');
  // const termsType: Terms = { personalAgree: false, acceptAgree: false };

  const [allChecked, setAllChecked] = useState<boolean>(false);
  const [itemsLen, setItemsLen] = useState(2); // 전체 아이템 길이
  // const [personalAgree, acceptAgree] = watch(['personalAgree', 'acceptAgree']);
  const onHandleAllCheck = () => {
    setAllChecked(!allChecked);
    reset({
      personalAgree: allChecked,
      acceptAgree: allChecked,
    });
    // }
  };
  const [trueLen, setTrueLen] = useState(0); // true인것의 길이

  useEffect(() => {
    const values = getValues();
    console.log(values);
    for (const value in values) {
      const state = values[value];
      if (state) {
        console.log(1);
        setTrueLen(trueLen + 1);
      } else setTrueLen(trueLen - 1);
    }
    itemsLen !== trueLen ? setAllChecked(false) : setAllChecked(true);
  }, [allChecked]);

  const onSubmit = (data: Terms) => console.log(data);

  return (
    <main className={style.terms}>
      <form
        className={onState ? style.form : style.formClose}
        onSubmit={handleSubmit(onSubmit)}
      >
        <h1>서비스 이용을 위해 동의가 필요해요</h1>
        <section className={style.item} onClick={() => onHandleAllCheck()}>
          <FiCheck
            className={style.checkbox}
            size="1.2em"
            color={!allChecked ? 'gray' : '#ff5c66'}
          />
          {itemsLen}
          {trueLen}
          <em>모두 동의하기</em>
        </section>
        {terms.map((term, idx) => {
          const { title, url } = term;
          const named = termsValue(idx);
          return (
            <section
              className={style.item}
              onClick={() => setValue(named, !getValues(named))}
              key={idx}
            >
              <Controller
                name={named}
                control={control}
                render={({ field: { onChange, onBlur } }) => (
                  <FiCheck
                    className={style.checkbox}
                    size="1.2em"
                    color={!getValues(named) ? 'gray' : '#ff5c66'}
                    onChange={onChange}
                    onBlur={onBlur}
                  />
                )}
              />
              <strong>{title}</strong>
              <a href={url} className={style.content}>
                <FiChevronRight />
              </a>
            </section>
          );
        })}
        {/* <section
          className={style.item}
          onClick={() => setValue('personalAgree', !personalAgree)}
        >
          <Controller
            name="personalAgree"
            control={control}
            render={({ field }) => (
              <FiCheck
                className={style.checkbox}
                size="1.2em"
                color={!personalAgree ? 'gray' : '#ff5c66'}
                {...field}
              />
            )}
          />
          <strong>이용약관 동의</strong>
          <span>(필수)</span>
          <span className={style.content}>
            <FiChevronRight />
          </span>
        </section>

        <section
          className={style.item}
          onClick={() => setValue('acceptAgree', !acceptAgree)}
        >
          <Controller
            name="acceptAgree"
            control={control}
            render={({ field }) => (
              <FiCheck
                className={style.checkbox}
                size="1.2em"
                color={!acceptAgree ? 'gray' : '#ff5c66'}
                {...field}
              />
            )}
          />
          <strong>개인정보 수집 및 이용 동의</strong>
          <span>(필수)</span>
          <span className={style.content}>
            <FiChevronRight />
          </span>
        </section> */}

        <span className={style.error}>
          {(errors.personalAgree || errors.acceptAgree) &&
            '필수 약관에 동의해주세요.'}
        </span>

        <button type="submit" className={style.next_btn} aria-labelledby="next">
          다음
        </button>
      </form>
      <div
        className={style.back}
        onClick={(e: React.MouseEvent) => {
          e.preventDefault();
          if (onState) {
            onClickToggleModal();
          }
        }}
      />
    </main>
  );
}
