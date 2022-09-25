import { chatListMocks } from 'src/__mocks__/chat';
import { ChatItem } from 'src/components/Chat';
import { PageLayout } from 'src/components/shared/Layout';

export default function ChatListPage() {
  return (
    <PageLayout isNeedFooter={true} headerHeight={44}>
      <ul>
        {chatListMocks.map(
          ({ boardId, roomImage, title, content, time, count }, index) => (
            <ChatItem
              key={title + index}
              {...{ boardId, roomImage, title, content, time, count }}
            />
          )
        )}
      </ul>
    </PageLayout>
  );
}
