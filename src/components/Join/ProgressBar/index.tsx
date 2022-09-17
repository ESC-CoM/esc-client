import $ from './style.module.scss';

interface Props {
  currStep: number;
  allStep: number;
}

export default function ProgressBar({ currStep, allStep }: Props) {
  return (
    <div className={$['progress-bar']}>
      <progress className={$['progress']} max={allStep} value={currStep} />
    </div>
  );
}
