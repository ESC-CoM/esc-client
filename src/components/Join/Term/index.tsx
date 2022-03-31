import style from './style.module.scss';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import TermsSchema from './yup';
import { FiCheck, FiChevronRight } from 'react-icons/fi';
import { useEffect, useState } from 'react';
import { TermSchema } from '../../../types/join';
import { useNavigate } from 'react-router-dom';
import { terms } from '../../../__mocks__/join';

export type Props = {
  onState: boolean;
  onClickToggleModal: () => void;
};

export default function Term({ onState, onClickToggleModal }: Props) {
  const {
    control,
    watch,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm<TermSchema>({
    defaultValues: {
      personalAgree: false,
      acceptAgree: false,
    },
    resolver: yupResolver(TermsSchema),
  });
  const navigate = useNavigate();

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
      const checked = termItems[item];
      if (checked) {
        trueLen++;
      }
    }
    setAllChecked(itemsLen === trueLen ? true : false);
  }, [watch()]);

  const onSubmit = (data: TermSchema) => {
    console.log(data);
    navigate('/more');
  };

  return (
    <main className={style.screen}>
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
