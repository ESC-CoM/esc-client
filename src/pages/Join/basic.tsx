import { PageLayout } from '../../components/Layout';
import { BasicInfo } from '../../components/Join';

function BasicInfoPage() {
  return (
    <PageLayout isNeedFooter={true} decreaseHeight={0}>
      <BasicInfo />
    </PageLayout>
  );
}

export default BasicInfoPage;
