import { PageLayout } from '../../components/Layout';
import { BasicJoin } from '../../components/Join';

function BasicJoinPage() {
  return (
    <PageLayout isNeedFooter={true} decreaseHeight={0}>
      <BasicJoin />
    </PageLayout>
  );
}

export default BasicJoinPage;
