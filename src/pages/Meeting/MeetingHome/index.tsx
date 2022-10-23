import { useCallback, useEffect, useRef, useState } from 'react';
import cx from 'classnames';
import { useNavigate } from 'react-router-dom';
import { meetingBoardMocks } from 'src/__mocks__/meetingBoardMocks';
import MeetingHeader from 'src/components/Meeting/MeetingHeader';
import HomeMeeting from 'src/components/Meeting/MeetingHome';
import Plus from 'src/components/shared/Icon/Plus';
import { InfiniteScroll, PageLayout } from 'src/components/shared/Layout';
import { useQueryRouter, useSearch } from 'src/hooks';
import { useMeetingItemListQuery } from 'src/hooks/api/home';
import useDetectScroll from 'src/hooks/useDetectScroll';

import { meetingOptions } from './constants';
import $ from './style.module.scss';

const initialInfiniteReq = {
  page: '0',
  size: '50',
  ownerId: '',
  headCount: '',
  university: '',
  gender: '',
  meetingStatus: '',
};

function MeetingHomePage() {
  const [isDown, setIsDown] = useState(false);
  const layoutRef = useRef<HTMLDivElement>(null);
  const isScrollMove = useDetectScroll(layoutRef);
  const navigate = useNavigate();
  const meetingKind = useSearch('kind') || meetingOptions[0].code;
  const router = useQueryRouter('kind');

  useEffect(() => {
    if (isScrollMove) {
      setIsDown(true);
    } else {
      setIsDown(false);
    }
    return () => {
      isScrollMove;
    };
  }, [isScrollMove]);

  const {
    data,
    hasNextPage,
    isLoading,
    isFetching,
    fetchNextPage,
    refetch,
    remove,
  } = useMeetingItemListQuery({ ...initialInfiniteReq });

  const fetchMoreMeetingFeeds = useCallback(() => {
    remove();
    return refetch({
      refetchPage: (_, index) => index === 0,
    });
  }, [refetch, remove]);

  const items = data?.pages;
  const itemList = meetingBoardMocks; // TODO: 서버될 때까지 Mock 데이터
  // items?.reduce(
  //   (acc: res.MeetingSummary[], cur) => (acc = [...acc, ...cur.items]),
  //   []
  // );

  return (
    <PageLayout
      isNeedFooter={true}
      headerHeight={60}
      ref={layoutRef}
      customHeader={
        <MeetingHeader
          data={meetingOptions}
          selected={meetingKind}
          handleChange={router}
        />
      }
    >
      <InfiniteScroll trigger={fetchMoreMeetingFeeds}>
        {itemList?.length && (
          <ul>
            {itemList.map(
              ({
                id,
                title,
                gender,
                headCount,
                university: college,
                owner: { profileImage: url },
              }) => {
                const meeting = {
                  id,
                  title,
                  gender,
                  headCount,
                  profiles: { college, url },
                };

                return <HomeMeeting key={meeting.id} meeting={meeting} />;
              }
            )}
          </ul>
        )}
      </InfiniteScroll>

      <button
        type="button"
        aria-label="과팅 등록하기"
        className={cx($['add-meeting'], {
          [$['add-meeting-down']]: isDown,
        })}
        onClick={() => navigate('./register')}
      >
        <Plus />
      </button>
    </PageLayout>
  );
}

export default MeetingHomePage;
