import { SocialLoginButton } from '../../atoms';
import styles from './style.module.scss';

interface Props {
  className: string;
}

const socialList = [
  {
    socialName: '카카오',
    onClick: () => console.log('clicked'),
  },
  {
    socialName: '네이버',
    onClick: () => console.log('clicked'),
  },
  {
    socialName: '구글',
    onClick: () => console.log('clicked'),
  },
];

function SocialLoginBox({ className }: Props) {
  return (
    <div className={className}>
      {socialList.map(({ socialName, onClick }) => (
        <SocialLoginButton
          key={socialName}
          className={styles.button}
          socialName={socialName}
          onClick={onClick}
        />
      ))}
    </div>
  );
}

export default SocialLoginBox;
