import $ from './style.module.scss';

type Props = {
  state: res.ParticipantStatus;
};

export default function StateBadge({ state }: Props) {
  const stateResult = state === 'ALLOWED' ? '승인됨' : '거절됨';
  const stateText = state === 'PENDING' ? '검토중' : stateResult;
  return <span className={$['state-badge']}>{stateText}</span>;
}
