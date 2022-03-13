import style from './style.module.scss';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import TermsSchema from './yup';
import { FiCheck, FiChevronRight } from 'react-icons/fi';
import { useEffect, useState } from 'react';
import { TermsInterface, Props } from '../../../types/join';
import { useNavigate } from 'react-router-dom';

export default function Terms({ onState, onClickToggleModal }: Props) {
  const {
    control,
    watch,
    handleSubmit,
    reset,
    // getValues,
    setValue,
    formState: { errors },
  } = useForm<TermsInterface>({
    defaultValues: {
      personalAgree: false,
      acceptAgree: false,
    },
    resolver: yupResolver(TermsSchema),
  });

  const navigate = useNavigate();

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
    // {
    //   title: '본인 확인 서비스 고유식별정보 처리 동의사항(선택)',
    //   url: 'http://3',
    // },
  ];

  const termItems = watch();
  const itemsLen = Object.keys(termItems).length;
  const [allChecked, setAllChecked] = useState<boolean>(false);

  const termsValue = (idx: number) => (!idx ? 'personalAgree' : 'acceptAgree');
  const onHandleAllCheck = (check: boolean) => {
    setAllChecked(!check);
    reset({
      personalAgree: !check,
      acceptAgree: !check,
    });
  };

  useEffect(() => {
    let trueLen = 0;
    for (const item in termItems) {
      const state = termItems[item];
      if (state) {
        trueLen++;
      }
    }
    itemsLen === trueLen ? setAllChecked(true) : setAllChecked(false);
  }, [watch()]);

  const onSubmit = (data: TermsInterface) => {
    console.log(data);
    navigate('/concern');
  };

  return (
    <main className={style.terms}>
      <form
        className={onState ? style.form : style.formClose}
        onSubmit={handleSubmit(onSubmit)}
      >
        <h1>서비스 이용을 위해 동의가 필요해요</h1>
        <section
          className={style.allChecked}
          onClick={() => onHandleAllCheck(allChecked)}
        >
          <FiCheck color={!allChecked ? 'gray' : '#ff5c66'} />
          <em className={style.text}>모두 동의하기</em>
        </section>
        <ul className={style.terms_list}>
          {terms.map((term, idx) => {
            const { title, url } = term;
            const named = termsValue(idx);
            return (
              <li
                className={style.terms_bx}
                onClick={() => setValue(named, !watch(named))}
                key={idx}
              >
                <ul className={style.terms_item}>
                  <li>
                    {!watch(named)}
                    <span className={style.checkbox}>
                      <Controller
                        name={named}
                        control={control}
                        render={({ field: { onChange, onBlur } }) => (
                          <FiCheck
                            color={!watch(named) ? 'gray' : '#ff5c66'}
                            onChange={onChange}
                            onBlur={onBlur}
                          />
                        )}
                      />
                    </span>
                  </li>
                  <li>
                    <strong className={style.title}>{title}</strong>
                  </li>
                  <li>
                    <a href={url} className={style.url}>
                      <FiChevronRight />
                    </a>
                  </li>
                </ul>
              </li>
            );
          })}
        </ul>
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
