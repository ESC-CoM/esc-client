import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Term } from 'src/components/Join';
import Modal from 'src/components/shared/BottomModal';
import { DrinkInput } from 'src/components/shared/DrinkInput';
import FooterButton from 'src/components/shared/FooterButton';
import HeightInput from 'src/components/shared/HeightInput';
import WeightInput from 'src/components/shared/WeightInput';
import useStore from 'src/store/useStore';
import { More2Type } from 'src/types/join';

import { PageLayout } from '../../components/shared/Layout';
import $ from './style.module.scss';

export default function MoreInfoPage2() {
  const { setJoinInfo } = useStore();
  const { watch, register, setValue, handleSubmit } = useForm<More2Type>({
    defaultValues: { height: 165, weight: 60, drink: 0 },
  });

  const [height, weight, drink] = watch(['height', 'weight', 'drink']);
  const [isTermsOpen, setIsTermsOpen] = useState(false);

  const onCloseTerms = () => {
    setIsTermsOpen(!isTermsOpen);
  };

  const onSubmit = (data: More2Type) => {
    const { height, weight, drink } = data;
    setJoinInfo({ height: +height, weight: +weight, drink });

    if (!isTermsOpen) {
      setIsTermsOpen(true);
    }
  };

  const setDrinkValue = (drink: number) => setValue('drink', drink);

  return (
    <PageLayout isNeedFooter={false} headerHeight={44} decreaseHeight={54}>
      <section className={$.container}>
        <h1>추가 정보</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <HeightInput
            className={$.input}
            value={height}
            register={register('height')}
          />
          <WeightInput
            className={$.input}
            value={weight}
            register={register('weight')}
          />
          <DrinkInput
            className={$.input}
            value={drink}
            setValue={setDrinkValue}
          />
          <FooterButton text="다음" type="submit" />
        </form>
        {isTermsOpen && (
          <Modal
            portalId="terms-modal"
            title="서비스 이용을 위해 동의가 필요해요"
            onClose={onCloseTerms}
            isOpen={isTermsOpen}
          >
            <Term />
          </Modal>
        )}
      </section>
    </PageLayout>
  );
}
