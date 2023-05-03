import { useState } from 'react';
import { PageLayout } from 'src/components/shared/Layout';
import SettingBox from 'src/components/shared/SettingBox';
import { getSettingMenu } from 'src/constants/settingMenu';

import $ from './style.module.scss';

export default function SettingPage() {
  const [isNotificationOn, setIsNotificationOn] = useState(true);

  const handleToggleClick = () => setIsNotificationOn((pre) => !pre);

  return (
    <PageLayout isNeedFooter={false} headerHeight={44}>
      <div className={$.container}>
        <SettingBox
          className={''}
          menu={getSettingMenu(isNotificationOn, handleToggleClick)}
        />
      </div>
    </PageLayout>
  );
}
