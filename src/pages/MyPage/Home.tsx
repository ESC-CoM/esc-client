import { CardBox } from 'src/components/MyPage';
import { useMyInfo } from 'src/hooks/api/user';

import { PageLayout } from '../../components/shared/Layout';

export default function Home() {
  const { data, isLoading, isError } = useMyInfo();

  // TODO: 로딩, 에러 처리
  if (isLoading) return <div>유저 정보 불러오는중</div>;
  if (isError) return <div>유저 정보 불러오기 실패</div>;
  if (!data) return <div>유저 정보 없음</div>;

  return (
    <PageLayout isNeedFooter={true} headerHeight={44}>
      <CardBox userInfo={data} />
    </PageLayout>
  );
}
