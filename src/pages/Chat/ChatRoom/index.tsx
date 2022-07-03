import { PageLayout } from 'src/components/Layout';
import $ from './style.module.scss';
import cx from 'classnames';
import { Message, ProfileImage, MessageInput } from 'src/components/Chat';
import { messageInfoMocks } from 'src/__mocks__/chat';
import { getChatRoom } from 'src/api/chat';
import { useQuery } from 'react-query';
import { CHAT_ROOM_DATA } from 'src/constants/queryKeys';
import { useParams } from 'react-router-dom';
import socketClient from 'src/common/socket';

export default function ChatRoomPage() {
  const { roomId } = useParams();
  console.log(roomId);
  // socket
  // socketClient.publish({
  //   destination: '/chat/general',
  //   body: '안녕하세요',
  //   headers: { priority: '9' },
  // });

  // fetch
  // const { isLoading, isError, data, error } = useQuery(
  //   [CHAT_ROOM_DATA, roomId],
  //   () => {
  //     if (roomId) getChatRoom(roomId);
  //   }
  // );

  // if (isLoading) {
  //   return <span>Loading</span>;
  // }

  return (
    <PageLayout isNeedFooter={true}>
      <section>
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
                <span className={$['friend-image']}>
                  <ProfileImage imagePath={imagePath} />
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
