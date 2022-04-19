import cx from 'classnames';
import styles from './style.module.scss';

interface Props {
  className: string;
  socialName: string;
  onClick: () => void;
}

function SocialLoginButton({ className, socialName, onClick }: Props) {
  return (
    <button
      className={cx(styles.socialLoginButton, className)}
      onClick={onClick}
      type="button"
      aria-label={`login with ${socialName}`}
    >
      {socialName}
    </button>
  );
}

export default SocialLoginButton;
