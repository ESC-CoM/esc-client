import cx from 'classnames';
import { SaparateLine, GrayLink } from '../../atoms';
import styles from './style.module.scss';

interface Props {
  className: string;
}

const linkInfos = [
  {
    textContent: '아이디 찾기',
    href: '',
  },
  {
    textContent: '비밀번호 찾기',
    href: '',
  },
  {
    textContent: '회원가입',
    href: '',
  },
];

function LoginToolArea({ className }: Props) {
  return (
    <div className={cx(className, styles.mainContainer)}>
      <SaparateLine width={296} height={1} />
      <div>
        {linkInfos.map(({ textContent, href }) => (
          <GrayLink
            key={textContent}
            className={styles.link}
            href={href}
            textContent={textContent}
          />
        ))}
      </div>
    </div>
  );
}

export default LoginToolArea;
