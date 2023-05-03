import MeetingHomeItem from 'src/components/Meeting/MeetingHome/Item';
import { InfiniteScroll } from 'src/components/shared/Layout';
import { useMeetingItemListQuery } from 'src/hooks/api/home';

const initialInfiniteReq = {
  page: 0,
  size: 8,
};

export default function MeetingHomeList() {
  const { itemList, getNextPage } = useMeetingItemListQuery({
    ...initialInfiniteReq,
  });

  return (
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

              return <MeetingHomeItem key={meeting.id} meeting={meeting} />;
            }
          )}
        </ul>
      )}
    </InfiniteScroll>
  );
}
