import { useEffect, useRef, useState } from 'react';
import {
  MdOutlineArrowBackIosNew,
  MdOutlineArrowForwardIos,
} from 'react-icons/md';
import { PageLayout } from 'src/components/Layout';
import ProfileCard from 'src/components/Meeting/ProfileCard';
import { meetingDetailMocks } from 'src/__mocks__/meetingDetailMocks';
import $ from './style.module.scss';
import { useWindowResize } from 'src/hooks';

function MeetingDetailPage() {
  const { title, content, friends } = meetingDetailMocks;
  const [imgCurrentNo, setImgCurrentNo] = useState(0);
  const [ulWidth, setUlWidth] = useState(0);
  const [mouseDownClientX, setMouseDownClientX] = useState<number>(0);
  const [mouseUpClientX, setMouseUpClientX] = useState<number>(0);
  const slideRef = useRef<HTMLUListElement | null>(null);
  const [width] = useWindowResize();

  useEffect(() => {
    if (slideRef.current) setUlWidth(slideRef.current.clientWidth);
  }, [width]);

  useEffect(() => {
    const dragSpace = Math.abs(mouseDownClientX - mouseUpClientX);

    if (mouseDownClientX !== 0) {
      if (mouseUpClientX < mouseDownClientX && dragSpace > 100) {
        onChangeImg(imgCurrentNo + 1);
      } else if (mouseUpClientX > mouseDownClientX && dragSpace > 100) {
        onChangeImg(imgCurrentNo - 1);
      }
    }
  }, [mouseUpClientX]);

  const onChangeImg = (index: number) => {
    if (friends.length <= index) index = 0;
    else if (index < 0) index = friends.length - 1;
    setImgCurrentNo(index);
  };

  const onMouseDown = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    setMouseDownClientX(e.clientX);
  };
  const onMouseUp = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    setMouseUpClientX(e.clientX);
  };

  return (
    <PageLayout isNeedFooter={false} decreaseHeight={0}>
      <main className={$['detail-box']}>
        <section className={$['friends-slides']}>
          <ul
            ref={slideRef}
            style={{
              transform: `translateX(
                ${imgCurrentNo * -110}%`,
            }}
            onMouseDown={onMouseDown}
            onMouseUp={onMouseUp}
          >
            {friends.map((friend, index) => (
              <ProfileCard
                key={friend.img}
                friend={friend}
                width={ulWidth}
                left={`calc(${index * ulWidth}px + ${index * 10}%`}
              />
            ))}
          </ul>

          <button
            className={$['button-prev']}
            onClick={() => onChangeImg(imgCurrentNo - 1)}
          >
            <MdOutlineArrowBackIosNew />
          </button>
          <button
            className={$['button-next']}
            onClick={() => onChangeImg(imgCurrentNo + 1)}
          >
            <MdOutlineArrowForwardIos />
          </button>
        </section>

        <section className={$['content-box']}>
          <h2>{title}</h2>
          <span>{content}</span>
        </section>
        <button className={$['apply-btn']}>신청하기</button>
      </main>
    </PageLayout>
  );
}

export default MeetingDetailPage;
