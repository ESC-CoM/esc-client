import style from './style.module.scss';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import TermsSchema from './yup';
import { FiCheck, FiChevronRight } from 'react-icons/fi';
import { useEffect, useState } from 'react';
import { TermSchema } from '../../../types/join';
import { useNavigate } from 'react-router-dom';
import { terms } from '../../../__mocks__/join';
import cx from 'classnames';

export type Props = {
  onState: boolean;
  toggleModal: () => void;
};

export default function Term({ onState, toggleModal }: Props) {
  const {
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

  const { personalAgree, acceptAgree } = watch();
  const [allChecked, setAllChecked] = useState<boolean>(false);

  const getTermsTitle = (idx: number) =>
    !idx ? 'personalAgree' : 'acceptAgree';

  const onHandleAllCheck = (check: boolean) => {
    reset({
      personalAgree: !check,
      acceptAgree: !check,
    });
    setAllChecked(!check);
  };

  const checkAllChecked = () => {
    const termItems = watch();
    const itemsLength = Object.keys(termItems).length;
    const termValues = Object.values(termItems);
    const trueLength = termValues.filter((value) => value).length;

    setAllChecked(itemsLength === trueLength ? true : false);
  };

  useEffect(() => {
    checkAllChecked();
  }, [watch()]);

  const onSubmit = (data: TermSchema) => {
    console.log(data);
    if (allChecked) navigate('/join/more');
  };

  return (
    <main className={style.screen}>
      <form className={style.form} onSubmit={handleSubmit(onSubmit)}>
        <h1>서비스 이용을 위해 동의가 필요해요</h1>
        <section
          className={style.allCheck}
          onClick={() => onHandleAllCheck(allChecked)}
        >
          <span
            className={cx(style.allCheckBox, {
              [style.checked]: allChecked,
            })}
          >
            <FiCheck />
          </span>
          <em className={style.text}>모두 동의하기</em>
        </section>
        <ul className={style.terms_list}>
          {terms.map((term, idx) => {
            const { title, url } = term;
            const named = getTermsTitle(idx);
            return (
              <li
                className={style.terms_bx}
                key={idx}
                onClick={() => setValue(named, !watch(named))}
              >
                <ul className={style.terms_item}>
                  <li>
                    <span
                      className={cx(style.checkbox, {
                        [style.checked]: watch(named),
                      })}
                    >
                      <FiCheck />
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
        {/* && !allChecked */}
        {(errors.personalAgree || errors.acceptAgree) && (
          <span className={style.error}>필수 약관에 동의해주세요.</span>
        )}
        <button type="submit" className={style.next_btn} aria-labelledby="next">
          다음
        </button>
      </form>
      <div
        className={style.back}
        onClick={(e: React.MouseEvent) => {
          e.preventDefault();
          if (onState) {
            toggleModal();
          }
        }}
      />
    </main>
  );
}
