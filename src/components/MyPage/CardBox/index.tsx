import SettingBox from 'src/components/shared/SettingBox';
import { MYPAGE_SETTING_MENU } from 'src/constants/settingMenu';
import { useMyInfo } from 'src/hooks/api/user';

import MyInformationCard from '../MyInfomationCard';
import $ from './style.module.scss';

// { userInfo }: Props
export default function CardBox() {
  const { data } = useMyInfo();

  return (
    <div className={$.container}>
      <section>
        <h2 className={$['card-title']}>기본 프로필</h2>
        {data && <MyInformationCard className={$.card} userInfo={data} />}
      </section>
      <section>
        <SettingBox menu={MYPAGE_SETTING_MENU} />
      </section>
    </div>
  );
}
