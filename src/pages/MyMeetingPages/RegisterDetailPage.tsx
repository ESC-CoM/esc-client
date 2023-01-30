import { useMemo } from 'react';
import { registerMeetingMocks } from '@mocks/data';
import { useNavigate } from 'react-router-dom';
import { PostCard, RequestedList } from 'src/components/MyMeeting';
import { InfiniteScroll } from 'src/components/shared/Layout';
import { useSearch } from 'src/hooks';
import { useGetRequestListForMeetingRegisteredByMe } from 'src/hooks/api/board';

const { id, kind, title, content, friends, date } = registerMeetingMocks[0];
const detailInfo = { badge: kind, title, content, date };

export default function RegisterDetailPage() {
  const navigate = useNavigate();
  const boardId = Number(useSearch('boardId') ?? -1);

  const { data, isLoading, isError, hasNextPage, fetchNextPage } =
    useGetRequestListForMeetingRegisteredByMe({
      boardId,
      params: { size: 10 },
    });

  const profileList = useMemo(
    () =>
      friends
        .map(({ src, nickName }) => ({
          src,
          alt: nickName,
        }))
        .slice(0, 3),
    []
  );

  const getProfileInfo = () => navigate('/home/detail/' + id);

  if (isLoading) return <div>loading...</div>;
  if (isError) return <div>error</div>;
  if (data === undefined) return <div>data error</div>;

  const items = data?.pages;
  const itemList = items?.reduce(
    (acc: res.RequestListForMeetingRegisteredByMeContent[], cur) =>
      (acc = [...acc, ...cur.content]),
    []
  );

  const getNextPage = () => {
    if (hasNextPage) fetchNextPage();
  };

  return (
    <>
      <PostCard
        className="detail"
        profileList={profileList}
        textInfo={detailInfo}
        onClick={getProfileInfo}
      />

      <InfiniteScroll trigger={getNextPage}>
        <ul>
          {itemList.map((item, index) => (
            <RequestedList
              key={`requested-list-${index}`}
              {...{
                requestBoardId: item.requestBoardId,
                title: item.title,
                requestParticipants: item.requestParticipants,
                updatedAt: item.updatedAt,
              }}
            />
          ))}
        </ul>
      </InfiniteScroll>
    </>
  );
}
