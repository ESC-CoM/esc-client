import './style.module.scss';
import { PageLayout } from '../../components/Layout';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import useStore from 'src/store/useStore';
import { MoreSchema } from 'src/types/join';
import { HeightInput, WeightInput, Drink } from '../../components/Join';
import { Term, NextButton } from 'src/components/Join';

export default function MoreInfoPage2() {
  const { setMore2Info } = useStore();
  const { watch, register, setValue, handleSubmit } = useForm<MoreSchema>({
    defaultValues: { height: 165, weight: 60, drink: 0 },
  });

  const [height, weight, drink] = watch(['height', 'weight', 'drink']);
  const [termsOpen, setTermsOpen] = useState<boolean>(false);

  const onSubmit = (data: MoreSchema) => {
    const more2Info = { height, weight, drink };
    setMore2Info(more2Info);

    if (!termsOpen) {
      setTermsOpen(true);
    }
  };

  return (
    <PageLayout isNeedFooter={false} decreaseHeight={54}>
      <section>
        <h1>추가 정보</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <HeightInput value={height} register={register('height')} />
          <WeightInput value={weight} register={register('weight')} />
          <Drink value={drink} setValue={setValue} />
          <NextButton text={'다음'} onClick={() => onSubmit(watch())} />
        </form>
        {termsOpen && (
          <Term
            toggleModal={() => setTermsOpen(!termsOpen)}
            onState={termsOpen}
          />
        )}
      </section>
    </PageLayout>
  );
}
