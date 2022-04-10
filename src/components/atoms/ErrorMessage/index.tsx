import styles from './style.module.scss';

interface Props {
  errorText: string | undefined;
}

function ErrorMessage({ errorText }: Props) {
  return <span className={styles.text}>{errorText}</span>;
}

export default ErrorMessage;
