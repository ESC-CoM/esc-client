import $ from './style.module.scss';

interface Props {
  label: string;
  htmlFor?: string;
  errorMsg?: string;
}

export default function Labels({ label, htmlFor, errorMsg }: Props) {
  return (
    <label className={$.label} htmlFor={htmlFor}>
      {errorMsg || label}
    </label>
  );
}
