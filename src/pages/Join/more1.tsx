import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import MoreJoinSchema from 'src/components/Join/MoreInfo/yup';
import FooterButton from 'src/components/shared/FooterButton';
import Input from 'src/components/shared/Input';
import InputWithButton from 'src/components/shared/InputWithButton';
import { MBTISelect } from 'src/components/shared/MBTISelect';
import { useNicknameDuplicateQuery } from 'src/hooks/api/join';
import useStore from 'src/store/useStore';
import { MBTIType, More1Type } from 'src/types/join';

import { GenderInput } from '../../components/Join';
import { PageLayout } from '../../components/shared/Layout';
import $ from './style.module.scss';

const NEXT_PATH = '/join/more2';

export default function MoreInfoPage1() {
  const { userInfo, setJoinInfo } = useStore();

  const router = useRouter();
  const {
    watch,
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<More1Type>({
    resolver: yupResolver(MoreJoinSchema),
  });
  const [gender, mbti] = watch(['gender', 'mbti']);

  const onSubmit = (data: More1Type) => {
    if (data.nickName !== userInfo.nickName) {
      setValue('isDuplicationChecked', false);
      return alert('별명 중복 검사가 필요합니다'); // TODO: 토스트 메세지
    }
    setJoinInfo(data);
    router.push(NEXT_PATH);
  };

  const [nickName, setNickName] = useState('');

  const { isSuccess, isError } = useNicknameDuplicateQuery(nickName);

  const handleDuplicationButtonClick = () => {
    setNickName(watch('nickName'));
  };

  useEffect(() => {
    if (isSuccess) {
      setJoinInfo({ nickName: watch('nickName') });
      setValue('isDuplicationChecked', true);
    }
    if (isError) {
      setValue('isDuplicationChecked', false);
    }
  }, [isSuccess, isError]);

  const setMBTI = (mbti: MBTIType) => setValue('mbti', mbti);

  return (
    <PageLayout isNeedFooter={false} headerHeight={44} decreaseHeight={54}>
      <section className={$.container}>
        <h1>추가 정보</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <InputWithButton
            type="text"
            proptype="register"
            className={$.input}
            register={register('nickName')}
            onClick={handleDuplicationButtonClick}
            labelErrorMessage={errors.nickName?.message}
            buttonErrorMessage={errors.isDuplicationChecked?.message}
            label="별명"
            buttonText="중복 확인"
            placeholder="최소 2자, 최대 10자"
          />
          {isSuccess && <span className={$.msg}>사용 가능한 별명입니다</span>}
          {isError && <span className={$.msg}>이미 사용 중인 별명입니다</span>}

          <GenderInput
            value={gender}
            setValue={setValue}
            errors={errors.gender}
          />
          <Input
            type="number"
            className={$.input}
            proptype="register"
            placeholder="년도(4자)"
            labelErrorMessage={errors.year?.message}
            register={register('year')}
            label="태어난 년도"
          />
          <MBTISelect
            className={$.input}
            {...{ mbti, setMBTI }}
            errors={errors.mbti?.message}
          />
          <FooterButton text="다음" type="submit" />
        </form>
      </section>
    </PageLayout>
  );
}
