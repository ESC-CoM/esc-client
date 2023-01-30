import cx from 'classnames';

import $ from './style.module.scss';

type Props = {
  state: res.ParticipantStatus;
};

export default function StateBadge({ state }: Props) {
  const isAllowed = state === 'ALLOWED';
  const isPending = state === 'PENDING';
  const stateResult = isAllowed ? '승인됨' : '거절됨';
  const stateText = isPending ? '검토중' : stateResult;

  return (
    <span
      className={cx($['state-badge'], {
        [$.rejected]: !isPending && !isAllowed,
        [$.allowed]: isAllowed,
      })}
    >
      {stateText}
    </span>
  );
}
