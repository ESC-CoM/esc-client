import { PageLayout } from 'src/components/Layout';
import SettingBox from 'src/components/Setting/SettingBox';

export default function BasicSettingPage() {
  return (
    <PageLayout isNeedFooter={false} decreaseHeight={0} headerHeight={44}>
      <SettingBox />
    </PageLayout>
  );
}
