import $ from './style.module.scss';

interface Props {
  value: string | number;
  unit?: string;
}

export default function ProfileTag({ value, unit }: Props) {
  return (
    <div className={$['profile-tag']}>
      #{value}
      {unit}
    </div>
  );
}
