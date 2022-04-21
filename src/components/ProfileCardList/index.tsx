import React, { useEffect, useRef, useState } from 'react';
import {
  MdOutlineArrowBackIosNew,
  MdOutlineArrowForwardIos,
} from 'react-icons/md';
import ProfileCard from 'src/components/ProfileCardList/ProfileCard';
import $ from './style.module.scss';
import { useWindowResize } from 'src/hooks';
import { Profile } from 'src/types/meeting';

type Props = {
  friends: Profile[];
};

function ProfileCardList({ friends }: Props) {
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

  const onMouseDown = (num: number) => setMouseDownClientX(num);
  const onMouseUp = (num: number) => setMouseUpClientX(num);

  return (
    <section
      className={$['friends-slides']}
      onTouchStart={(e: React.TouchEvent) =>
        onMouseDown(e.changedTouches[0].pageX)
      }
      onTouchEnd={(e: React.TouchEvent) => onMouseUp(e.changedTouches[0].pageX)}
      onMouseDown={(e: React.MouseEvent) => onMouseDown(e.clientX)}
      onMouseUp={(e: React.MouseEvent) => onMouseUp(e.clientX)}
    >
      <ul
        ref={slideRef}
        style={{
          transform: `translateX(
                ${imgCurrentNo * -110}%`,
        }}
      >
        {friends.map((friend, index) => (
          <ProfileCard
            key={friend.img}
            friend={friend}
            profileWidth={ulWidth}
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
  );
}

export default ProfileCardList;
