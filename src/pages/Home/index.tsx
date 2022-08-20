import { useEffect, useRef, useState } from 'react';
import { PageLayout, InfiniteScroll } from 'src/components/Layout';
import HomeMeeting from 'src/components/HomeMeeting';
import { MeetingType } from 'src/types/meeting';
import { meetingBoardMocks } from 'src/__mocks__/meetingBoardMocks';
import $ from './style.module.scss';
import Plus from 'src/components/Icon/Plus';
import useDetectScroll from 'src/hooks/useDetectScroll';
import { useNavigate } from 'react-router-dom';
import classnames from 'classnames';

function MeetingBoardPage() {
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
  }, [isScrollMove]);

  const fetchMoreMeetingFeeds = () => {
    setMeetingList([...meetingList, ...meetingBoardMocks]);
  };

  return (
    <PageLayout isNeedFooter={true} headerHeight={44} ref={layoutRef}>
      <InfiniteScroll trigger={fetchMoreMeetingFeeds}>
        <ul>
          {meetingList.map((meeting, i) => (
            <HomeMeeting key={`meeting-${i}`} meeting={meeting} />
          ))}
        </ul>
      </InfiniteScroll>

      <button
        type="button"
        aria-label="과팅 등록하기"
        className={classnames($['add-meeting'], {
          [$['add-meeting-down']]: isDown,
        })}
        onClick={() => navigate('./apply')} // Todo: register로 변경
      >
        <Plus />
      </button>
    </PageLayout>
  );
}

export default MeetingBoardPage;
