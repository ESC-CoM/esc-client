import SettingBox from 'src/components/shared/SettingBox';
import { MYPAGE_SETTING_MENU } from 'src/constants/settingMenu';
import { useMyInfo } from 'src/hooks/api/user';

import MyInformationCard from '../MyInfomationCard';
import $ from './style.module.scss';

// { userInfo }: Props
export default function CardBox() {
  const { data: userInfo, isLoading, isError } = useMyInfo();

  // // TODO: 로딩, 에러 처리
  if (isLoading) return <div>유저 정보 불러오는중</div>;
  if (isError) return <div>유저 정보 불러오기 실패</div>;
  if (!userInfo) return <div>유저 정보 없음</div>;

  return (
    <div className={$.container}>
      <section>
        <h2 className={$['card-title']}>기본 프로필</h2>
        {userInfo && (
          <MyInformationCard className={$.card} userInfo={userInfo} />
        )}
      </section>
      <section>
        <SettingBox menu={MYPAGE_SETTING_MENU} />
      </section>
    </div>
  );
}
