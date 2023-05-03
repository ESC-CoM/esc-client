import SettingBox from 'src/components/Setting/SettingBox';
import { PageLayout } from 'src/components/shared/Layout';

export default function BasicSettingPage() {
  return (
    <PageLayout isNeedFooter={false} headerHeight={44}>
      <SettingBox />
    </PageLayout>
  );
}
