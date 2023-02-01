import { useMemo } from 'react';
import { registerMeetingMocks } from '@mocks/data';
import { useNavigate } from 'react-router-dom';
import { PostCard, RequestedList } from 'src/components/MyMeeting';
import { InfiniteScroll } from 'src/components/shared/Layout';
import { useSearch } from 'src/hooks';
import {
  usePatchAllowRequest,
  usePatchRejectRequest,
} from 'src/hooks/api/board';
import { useGetRequestListForMeetingRegisteredByMe } from 'src/hooks/api/board';

const { id, kind, title, message, registerParticipants, createdAt } =
  registerMeetingMocks[0];
const detailInfo = { badge: kind, title, content: message, date: createdAt };

export default function RegisterDetailPage() {
  const navigate = useNavigate();
  const boardId = Number(useSearch('boardId') ?? -1);
  const { mutate: allowRequest } = usePatchAllowRequest(boardId);
  const { mutate: rejectRequest } = usePatchRejectRequest(boardId);

  const { data, isLoading, isError, getNextPage } =
    useGetRequestListForMeetingRegisteredByMe({
      boardId,
      params: { size: 10 },
    });

  const profileList = useMemo(
    () =>
      registerParticipants
        .map(({ profileImage, nickname }) => ({
          src: profileImage,
          alt: nickname,
        }))
        .slice(0, 3),
    []
  );

  const getProfileInfo = () => navigate('/home/detail/' + id);

  if (isLoading) return <div>loading...</div>;
  if (isError) return <div>error</div>;
  if (!data) return <div>data error</div>;

  const itemList = data?.pages.reduce(
    (acc: res.RequestListForMeetingRegisteredByMeContent[], cur) =>
      (acc = [...acc, ...cur.content]),
    []
  );

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
                createdAt: item.createdAt,
                onAllowClick: () => allowRequest(item.requestBoardId),
                onRejectClick: () => rejectRequest(item.requestBoardId),
              }}
            />
          ))}
        </ul>
      </InfiniteScroll>
    </>
  );
}
