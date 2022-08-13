import MyInformationCard from '../MyInfomationCard';
import PrivateInformationCard from '../PrivateInformationCard';
import $ from './style.module.scss';

export default function CardBox() {
  return (
    <div className={$.container}>
      <section>
        <h2 className={$['card-title']}>기본 프로필</h2>
        <MyInformationCard className={$.card} />
      </section>
    </div>
  );
}
