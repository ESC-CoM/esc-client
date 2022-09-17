import $ from './style.module.scss';

interface Props {
  errorText: string | undefined;
}

function ErrorMessage({ errorText }: Props) {
  if (errorText) return <span className={$.text}>{errorText}</span>;
  return null;
}

export default ErrorMessage;
