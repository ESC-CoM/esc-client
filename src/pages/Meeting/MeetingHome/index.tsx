import { useEffect, useRef, useState } from 'react';
import cx from 'classnames';
import { useNavigate } from 'react-router-dom';
import { meetingBoardMocks } from 'src/__mocks__/meetingBoardMocks';
import MeetingHeader from 'src/components/Meeting/MeetingHeader';
import HomeMeeting from 'src/components/Meeting/MeetingHome';
import Plus from 'src/components/shared/Icon/Plus';
import { InfiniteScroll, PageLayout } from 'src/components/shared/Layout';
import useDetectScroll from 'src/hooks/useDetectScroll';
import { MeetingType } from 'src/types/meeting';

import { meetingOptions } from './constants';
import $ from './style.module.scss';

function MeetingHomePage() {
  const [meetingList, setMeetingList] = useState<MeetingType[]>([]);
  const [isDown, setIsDown] = useState(false);
  const layoutRef = useRef<HTMLDivElement>(null);
  const isScrollMove = useDetectScroll(layoutRef);
  const navigate = useNavigate();

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

  const fetchMoreMeetingFeeds = () => {
    setMeetingList([...meetingList, ...meetingBoardMocks]);
  };

  return (
    <PageLayout
      isNeedFooter={true}
      headerHeight={60}
      ref={layoutRef}
      customHeader={<MeetingHeader data={meetingOptions} />}
    >
      <InfiniteScroll trigger={fetchMoreMeetingFeeds}>
        <ul>
          {meetingList.map((meeting) => (
            <HomeMeeting key={meeting.id} meeting={meeting} />
          ))}
        </ul>
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
