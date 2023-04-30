import { memo, useCallback, useEffect, useState } from 'react';
import cx from 'classnames';
import PersonalProfile from 'src/components/PersonalProfile';
import { Chat } from 'src/types/chat';

import MessageCard from '../MessageCard';
import $ from './style.module.scss';

interface Props {
  profileRef: React.RefObject<HTMLDivElement>;
  chatList: Chat[];
}

function MessageList({ profileRef, chatList }: Props) {
  const [isClickProfile, setIsClickProfile] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [startClientY, setStartClientY] = useState(0);
  const [isOverHalf, setIsOverHalf] = useState(false);

  const initTransform = () => {
    if (profileRef.current)
      profileRef.current.style.transform = 'translateY(0px)';
  };

  const getTransform = () => {
    if (profileRef.current)
      return +profileRef.current?.style.transform.replace(/[^\d.]/g, '');
  };

  const lazyAnimation = () => {
    setTimeout(() => {
      setIsClickProfile(false);
    }, 300);
  };

  const closeModal = useCallback(() => {
    setIsOverHalf(true);
    lazyAnimation();
  }, []);

  const clickProfile = (userId: string) => {
    // 개인 프로필 정보 불러오기
    setIsClickProfile(true);
    setIsOverHalf(false);
  };

  const onMouseDown = (e: TouchEvent | MouseEvent) => {
    setIsDragging(true);
    if (e.type === 'touchstart' && 'touches' in e) {
      setStartClientY(e.touches[0].clientY);
    }
    if (e.type === 'mousedown' && 'clientY' in e) {
      setStartClientY(e.clientY);
    }
  };

  const onMouseMove = (e: TouchEvent | MouseEvent) => {
    const translateY = getTransform();
    if (isDragging && profileRef.current && translateY !== undefined) {
      let clientY = 0;
      if (e.type === 'touchmove' && 'touches' in e) {
        clientY = e.touches[0].clientY;
      } else if (e.type === 'mousemove' && 'clientY' in e) {
        clientY = e.clientY;
      } else return;

      const updateTranslateY = translateY + (clientY - startClientY);

      if (updateTranslateY > 0) {
        profileRef.current.style.transform = `translateY(${updateTranslateY}px)`;
        setStartClientY(clientY);
      }
    }
  };

  const onMouseUp = () => {
    setIsDragging(false);
    const translateY = getTransform();

    if (translateY !== undefined) {
      if (translateY >= 300) {
        setIsOverHalf(true);
        lazyAnimation();
      } else {
        setIsOverHalf(false);
        initTransform();
      }
    }
  };

  useEffect(() => {
    if (!isClickProfile) {
      setIsOverHalf(false);
      initTransform();
    }
  }, [isClickProfile]);

  useEffect(() => {
    if (profileRef.current) {
      const element = profileRef.current;

      element.addEventListener('touchstart', onMouseDown);
      element.addEventListener('touchmove', onMouseMove);
      element.addEventListener('touchend', onMouseUp);
      element.addEventListener('mousedown', onMouseDown);
      element.addEventListener('mousemove', onMouseMove);
      element.addEventListener('mouseup', onMouseUp);

      return () => {
        element.removeEventListener('touchstart', onMouseDown);
        element.removeEventListener('touchmove', onMouseMove);
        element.removeEventListener('touchend', onMouseUp);
        element.removeEventListener('mousedown', onMouseDown);
        element.removeEventListener('mousemove', onMouseMove);
        element.removeEventListener('mouseup', onMouseUp);
      };
    }
  });

  return (
    <>
      {isClickProfile && (
        <div
          className={cx($['profile-active'], isOverHalf && $['profile-hidden'])}
          ref={profileRef}
        >
          <PersonalProfile closeModal={closeModal} />
        </div>
      )}

      <section className={$['chat-content']}>
        {chatList.map(({ sender, content, date }, index) => {
          const { id, name, imagePath } = sender;
          return (
            <MessageCard
              key={`${sender.id}${date}${index}`}
              {...{ id, name, imagePath, content, date, clickProfile }}
            />
          );
        })}
      </section>
    </>
  );
}

export default memo(MessageList);
