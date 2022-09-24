import $ from './style.module.scss';

interface Props {
  value: string | number;
  unit?: string;
  fontSize?: string;
}

export default function ProfileTag({ value, unit, fontSize }: Props) {
  return (
    <div className={$['profile-tag']} style={{ fontSize }}>
      #{value}
      {unit}
    </div>
  );
}
