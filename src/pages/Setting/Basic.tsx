import { PageLayout } from 'src/components/shared/Layout';
import SettingBox from 'src/components/Setting/SettingBox';

export default function BasicSettingPage() {
  return (
    <PageLayout isNeedFooter={false} headerHeight={44}>
      <SettingBox />
    </PageLayout>
  );
}
