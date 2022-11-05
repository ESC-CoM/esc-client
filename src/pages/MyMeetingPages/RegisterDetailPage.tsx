import { useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  registerMeetingMocks,
  requestListMocks,
} from 'src/__mocks__/myMeeting';
import { PostCard, RequestedList } from 'src/components/MyMeeting';
import { InfiniteScroll } from 'src/components/shared/Layout';
import { useGetRequestListForMeetingRegisteredByMe } from 'src/hooks/api/board';
import { MyMeetingRequestType } from 'src/types/myMeeting';

const { kind, title, content, friends, date } = registerMeetingMocks[0];
const detailInfo = { badge: kind, title, content, date };

export default function RegisterDetailPage() {
  const navigate = useNavigate();
  const [boardId, setBoardId] = useState(-1);
  const [requestedMeeting, setRegisterMeeting] = useState<
    MyMeetingRequestType[]
  >([]);
  const {
    data: requestList,
    isLoading: isRequestListLoading,
    isError: isRequestListError,
    fetchNextPage: fetchNextRequestList,
  } = useGetRequestListForMeetingRegisteredByMe({
    boardId,
    params: { page: 0, size: 10 },
  });

  useEffect(() => {
    const queryString = window.location.href;
    const urlParams = new URLSearchParams(queryString);
    const boardId = urlParams.get('boardId');
    if (!boardId) return;
    setBoardId(parseInt(boardId));
  }, []);

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

  const fetchMoreMeetingFeeds = () => {
    setRegisterMeeting([...requestedMeeting, ...requestListMocks]);
  };

  const getProfileInfo = () => {
    navigate('/home/detail');
  };

  if (isRequestListLoading) return <div>loading...</div>;
  if (isRequestListError) return <div>error</div>;
  if (requestList === undefined) return <div>data error</div>;

  console.log(requestList);

  return (
    <>
      <button onClick={() => fetchNextRequestList}>fetch next page</button>
      <PostCard
        className="detail"
        profileList={profileList}
        textInfo={detailInfo}
        onClick={getProfileInfo}
      />

      <InfiniteScroll trigger={fetchMoreMeetingFeeds}>
        <ul>
          {requestedMeeting.map(({ comment, requestedInfo, date }, index) => (
            <RequestedList
              key={`requested-list-${index}`}
              {...{ comment, requestedInfo, date }}
            />
          ))}
        </ul>
      </InfiniteScroll>
    </>
  );
}
