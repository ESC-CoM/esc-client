import MyInformationCard from '../MyInfomationCard';
import $ from './style.module.scss';
import SettingBox from 'src/components/shared/SettingBox';
import { MYPAGE_SETTING_MENU } from 'src/constants/settingMenu';

export default function CardBox() {
  return (
    <div className={$.container}>
      <section>
        <h2 className={$['card-title']}>기본 프로필</h2>
        <MyInformationCard className={$.card} />
      </section>
      <section>
        <SettingBox menu={MYPAGE_SETTING_MENU} />
      </section>
    </div>
  );
}
