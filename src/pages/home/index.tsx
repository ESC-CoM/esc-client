import Link from 'next/link';
import { useRef } from 'react';
import cx from 'classnames';
import MeetingHeader from 'src/components/Meeting/MeetingHeader';
import MeetingHomeList from 'src/components/Meeting/MeetingHome/List';
import AsyncWrapper from 'src/components/shared/AsyncWrapper';
import ErrorFallback from 'src/components/shared/ErrorFallback';
import Plus from 'src/components/shared/Icon/Plus';
import { PageLayout } from 'src/components/shared/Layout';
import Spinner from 'src/components/shared/Spinner';
import { useQueryRouter, useSearch } from 'src/hooks';
import useDetectScroll from 'src/hooks/useDetectScroll';

import { meetingOptions } from './constants';
import $ from './style.module.scss';

function MeetingHomePage() {
  const layoutRef = useRef<HTMLDivElement>(null);
  const isAnimationable = useDetectScroll(layoutRef);
  const meetingKind = useSearch('kind') || meetingOptions[0].code;
  const router = useQueryRouter('kind');

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
      <AsyncWrapper
        errorFallback={ErrorFallback}
        suspenseFallback={<Spinner />}
      >
        <MeetingHomeList />
      </AsyncWrapper>
      <Link
        aria-label="과팅 등록하기"
        className={cx($['add-meeting'], {
          [$['add-meeting-down']]: isAnimationable,
        })}
        href="/home/register"
      >
        <Plus />
      </Link>
    </PageLayout>
  );
}

export default MeetingHomePage;
