import { PageLayout } from 'src/components/Layout';
import { Welcome } from 'src/components/Join';

export default function WelcomePage() {
  return (
    <PageLayout isNeedFooter={false} decreaseHeight={0}>
      <Welcome />
    </PageLayout>
  );
}
