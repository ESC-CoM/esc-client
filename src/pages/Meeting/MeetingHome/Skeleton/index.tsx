import $ from './style.module.scss';

interface Props {
  itemNum: number;
}

function MeetingItemSkeleton() {
  return (
    <div className={$['meeting-skeleton']}>
      <div className={$['meeting-img']}></div>
      <div className={$['meeting-content']}>
        <div className={$['meeting-title']}></div>
        <div className={$['meeting-college']}></div>
        <div className={$['meeting-gender']}></div>
      </div>
    </div>
  );
}

function HomeSkeleton({ itemNum }: Props) {
  const skeletonItemList = Array.from({ length: itemNum }, (_, idx) => idx);
  return (
    <article>
      {skeletonItemList.map((item) => (
        <MeetingItemSkeleton key={item} />
      ))}
    </article>
  );
}

export default HomeSkeleton;
