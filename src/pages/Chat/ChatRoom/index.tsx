import { PageLayout } from 'src/components/Layout';
import $ from './style.module.scss';
import cx from 'classnames';
import { Message, ProfileImage, MessageInput } from 'src/components/Chat';
import { messageInfoMocks } from 'src/__mocks__/chat';
import { useEffect, useState } from 'react';
import PersonalProfilePage from 'src/pages/PersonalProfile';

export default function ChatRoomPage() {
  const [isClickProfile, setIsClickProfile] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [clientY, setClientY] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  const [isMouseUp, setIsMouseUp] = useState(true);
  const [isOverHalf, setIsOverHalf] = useState(false);

  const clickProfile = (userId: string) => {
    // 개인 프로필 정보 불러오기
    setIsClickProfile(true);
    setIsOverHalf(false);
  };

  const onMouseDown = (e: React.MouseEvent<HTMLElement>) => {
    setClientY(e.clientY);
    setIsDragging(true);
    setIsMouseUp(false);
  };

  const onMouseUp = () => {
    setIsDragging(false);
    setIsMouseUp(true);

    if (scrollY > 600) {
      setIsOverHalf(true);
    } else {
      setIsOverHalf(false);
      setScrollY(0);
    }
  };

  const onMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (isDragging) {
      setScrollY(scrollY + e.clientY - clientY);
      setClientY(e.clientY);
    }
  };

  const closeModal = () => {
    setIsClickProfile(false);
    setScrollY(0);
  };

  const getTranslate = () => {
    if (!isMouseUp) {
      return `translateY(${scrollY}px)`;
    }
    return isOverHalf ? `translateY(100%)` : `translateY(0%)`;
  };

  useEffect(() => {
    if (isOverHalf) {
      setIsClickProfile(false);
      setScrollY(0);
    }
  }, [isOverHalf]);

  return (
    <PageLayout isNeedFooter={true}>
      {isClickProfile && (
        <div
          className={cx($['hidden'], !isOverHalf && $['active'])}
          style={{
            transform: getTranslate(),
          }}
          onMouseDown={onMouseDown}
          onMouseUp={onMouseUp}
          onMouseMove={onMouseMove}
        >
          <PersonalProfilePage closeModal={closeModal} />
        </div>
      )}

      <section className={$['chat-content']}>
        {messageInfoMocks.map(({ sender, content, date }, index) => {
          const { id, name, imagePath } = sender;
          return (
            <div
              key={sender + date + index}
              className={cx(
                $['msg-content'],
                $[sender.id === 'loginid' ? 'me' : 'other']
              )}
            >
              {sender.id === 'other' && (
                <span
                  className={$['friend-image']}
                  onClick={() => clickProfile(sender.id)}
                >
                  <ProfileImage
                    alt={name}
                    src={imagePath}
                    width={35}
                    height={35}
                  />
                </span>
              )}
              <Message id={id} name={name} content={content} />

              <time className={$.date} dateTime={date}>
                {date}
              </time>
            </div>
          );
        })}
      </section>
      <div className={$['msg-input']}>
        <MessageInput />
      </div>
    </PageLayout>
  );
}
