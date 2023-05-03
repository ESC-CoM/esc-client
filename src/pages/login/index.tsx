import Login from 'src/components/Login/Login';
import { PageLayout } from 'src/components/shared/Layout';

function LoginPage() {
  return (
    <PageLayout isNeedFooter={false} decreaseHeight={0}>
      <Login />
    </PageLayout>
  );
}

export default LoginPage;
