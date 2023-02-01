import { useEffect, useRef, useState } from 'react';
import cx from 'classnames';
import { useNavigate } from 'react-router-dom';
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
  page: 0,
  size: 30,
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

  const { itemList, getNextPage, isLoading, isError } = useMeetingItemListQuery(
    { ...initialInfiniteReq }
  );

  if (isLoading) return <div>loading...</div>;
  if (isError) return <div>error</div>;
  if (!itemList) return <div>data error</div>;

  return (
    <PageLayout
      isNeedFooter={true}
      headerHeight={104}
      ref={layoutRef}
      headerWithCustom={
        <MeetingHeader
          data={meetingOptions}
          selected={meetingKind}
          handleChange={router}
        />
      }
    >
      <InfiniteScroll trigger={getNextPage}>
        {!!itemList?.length && (
          <ul>
            {itemList.map(
              ({ id, title, gender, headCount, university, profileImages }) => {
                const meeting = {
                  id,
                  title,
                  gender,
                  headCount,
                  college: university,
                  profiles: profileImages,
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
