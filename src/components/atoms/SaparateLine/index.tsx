import styles from './style.module.scss';

interface Props {
  width: number;
  height: number;
}

function SaparateLine({ width, height }: Props) {
  return <hr className={styles.line} style={{ width, height }}></hr>;
}

export default SaparateLine;
