import { chatListMocks } from 'src/__mocks__/chat';
import { ChatList } from 'src/components/Chat';
import { PageLayout } from 'src/components/shared/Layout';

export default function ChatListPage() {
  return (
    <PageLayout isNeedFooter={true} headerHeight={44}>
      <ul>
        {chatListMocks.map(
          ({ roomImage, title, content, time, count }, index) => (
            <ChatList
              key={title + index}
              {...{ roomImage, title, content, time, count }}
            />
          )
        )}
      </ul>
    </PageLayout>
  );
}
