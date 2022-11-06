import SettingBox from 'src/components/shared/SettingBox';
import { MYPAGE_SETTING_MENU } from 'src/constants/settingMenu';

import MyInformationCard from '../MyInfomationCard';
import $ from './style.module.scss';

type Props = {
  userInfo: res.UserInfoDetailSuccess;
};

export default function CardBox({ userInfo }: Props) {
  return (
    <div className={$.container}>
      <section>
        <h2 className={$['card-title']}>기본 프로필</h2>
        <MyInformationCard className={$.card} userInfo={userInfo} />
      </section>
      <section>
        <SettingBox menu={MYPAGE_SETTING_MENU} />
      </section>
    </div>
  );
}
