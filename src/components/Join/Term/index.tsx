import { useEffect, useState } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { FiCheck } from '@react-icons/all-files/fi/FiCheck';
import { FiChevronRight } from '@react-icons/all-files/fi/FiChevronRight';
import cx from 'classnames';
import { useForm } from 'react-hook-form';
import { terms } from 'src/__mocks__/join';
import ErrorMessage from 'src/components/shared/ErrorMessage';
import { useRegister } from 'src/hooks/api/join';
import useStore from 'src/store/useStore';
import { UserStoreInfo } from 'src/store/useStore';
import { TermSchema } from 'src/types/join';
import getUUID from 'src/utils/getUUID';

import $ from './style.module.scss';
import TermsSchema from './yup';

export type Props = {
  onState: boolean;
  onClose: () => void;
};

export default function Term() {
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

  const handleCheck = (index: number) => {
    const named = getTermsTitle(index);
    setValue(named, !watch(named));
  };

  const handleAllCheck = (check: boolean) => {
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

  const changeKeyName = (userInfo: UserStoreInfo) => {
    const newUserInfo: any = { ...userInfo };
    newUserInfo.phone = newUserInfo.phoneNumber;
    delete newUserInfo.phoneNumber;

    newUserInfo.amountOfAlchol = newUserInfo.drink * 10;
    delete newUserInfo.drink;

    const { year } = newUserInfo;
    const birth = `${year}`;
    newUserInfo.birth = birth;
    delete newUserInfo.year;

    delete newUserInfo.authNumber;

    newUserInfo.gender = newUserInfo.gender === '남' ? 'men' : 'women';

    newUserInfo.studentIdAuthenticationKey = getUUID();

    return newUserInfo as res.UserInfo;
  };

  const { userInfo, setJoinInfo } = useStore();

  const { mutate } = useRegister();

  const onSubmit = (data: TermSchema) => {
    if (allChecked) {
      setJoinInfo({ isAgree: true });

      const userData = changeKeyName(userInfo);
      mutate(userData);
    }
  };

  return (
    <form className={$['term-form']} onSubmit={handleSubmit(onSubmit)}>
      <div
        className={$['all-check']}
        onClick={() => handleAllCheck(allChecked)}
      >
        <span
          className={cx($['all-check-box'], {
            [$.checked]: allChecked,
          })}
        >
          <FiCheck />
        </span>
        <em className={$.title}>모두 동의하기</em>
      </div>

      <ul className={$['terms-list']}>
        {terms.map((term, idx) => {
          const { title, url } = term;
          const named = getTermsTitle(idx);
          return (
            <li
              className={$['terms-bx']}
              key={term.url}
              onClick={() => handleCheck(idx)}
            >
              <span
                className={cx($['check-box'], {
                  [$.checked]: watch(named),
                })}
              >
                <FiCheck />
              </span>
              <strong className={$.title}>{title}</strong>
              <a href={url} className={$.url}>
                <FiChevronRight />
              </a>
            </li>
          );
        })}
      </ul>
      {(errors.personalAgree || errors.acceptAgree) && !allChecked && (
        <span className={$['error-msg']}>
          <ErrorMessage errorText="필수 약관에 동의해주세요." />
        </span>
      )}

      <button type="submit" className={$['next-btn']} aria-label="다음 버튼">
        다음
      </button>
    </form>
  );
}
