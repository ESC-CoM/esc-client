import { PageLayout } from '../../components/Layout';
import { BasicInfo } from '../../components/Join';

export default function BasicInfoPage() {
  return (
    <PageLayout isNeedFooter={false} decreaseHeight={54}>
      <BasicInfo />
    </PageLayout>
  );
}
