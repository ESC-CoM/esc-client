import $ from './style.module.scss';

export default function StateBadge() {
  return <span className={$['state-badge']}>거절됨</span>;
}
