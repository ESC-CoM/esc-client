import { PageLayout } from 'src/components/Layout';
import { Setting as Header } from 'src/components/Header';
import SettingBox from 'src/components/Setting/SettingBox';

export default function BasicSettingPage() {
  return (
    <PageLayout isNeedFooter={false} decreaseHeight={0}>
      <Header />
      <SettingBox />
    </PageLayout>
  );
}
