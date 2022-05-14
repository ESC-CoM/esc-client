import $ from './style.module.scss';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import TermsSchema from './yup';
import { FiCheck, FiChevronRight } from 'react-icons/fi';
import { useEffect, useState } from 'react';
import { TermSchema } from 'src/types/join';
import { useNavigate } from 'react-router-dom';
import { terms } from 'src/__mocks__/join';
import cx from 'classnames';
import useStore from 'src/store/useStore';

export type Props = {
  onState: boolean;
  toggleModal: () => void;
};

const NEXT_PATH = '/login';

export default function Term({ onState, toggleModal }: Props) {
  const { basicInfo, moreInfo } = useStore();
  console.log(basicInfo, moreInfo);
  const navigate = useNavigate();
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
    if (allChecked) navigate(NEXT_PATH);
  };

  return (
    <main className={$['screen']}>
      <form className={$['form']} onSubmit={handleSubmit(onSubmit)}>
        <h2>서비스 이용을 위해 동의가 필요해요</h2>

        <section
          className={$['all-check']}
          onClick={() => onHandleAllCheck(allChecked)}
        >
          <span
            className={cx($['all-check-box'], {
              [$['checked']]: allChecked,
            })}
          >
            <FiCheck />
          </span>
          <em className={$['text']}>모두 동의하기</em>
        </section>

        <ul className={$['terms-list']}>
          {terms.map((term, idx) => {
            const { title, url } = term;
            const named = getTermsTitle(idx);
            return (
              <li
                className={$['terms-bx']}
                key={idx}
                onClick={() => setValue(named, !watch(named))}
              >
                <ul className={$['terms-item']}>
                  <li>
                    <span
                      className={cx($['check-box'], {
                        [$['checked']]: watch(named),
                      })}
                    >
                      <FiCheck />
                    </span>
                  </li>
                  <li>
                    <strong className={$['title']}>{title}</strong>
                  </li>
                  <li>
                    <a href={url} className={$['url']}>
                      <FiChevronRight />
                    </a>
                  </li>
                </ul>
              </li>
            );
          })}
        </ul>
        {(errors.personalAgree || errors.acceptAgree) && !allChecked && (
          <span className={$['error']}>필수 약관에 동의해주세요.</span>
        )}

        <button type="submit" className={$['next-btn']} aria-labelledby="next">
          다음
        </button>
      </form>

      <div
        className={$['back']}
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
