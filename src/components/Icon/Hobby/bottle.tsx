import style from './style.module.scss';

type Props = {
  degree: string;
};

export default function Bottle({ degree }: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 123.06 384"
      width="30"
      height="65"
      fill="none"
      className={style.svg}
    >
      <g data-name="레이어 2">
        <g data-name="레이어 1">
          <path
            d="M120 353V188c0-31-25-50-25-50L84 32H39L28 138S3 157 3 188v165s-2 27 28 27h61c30 0 28-27 28-27Z"
            stroke="#0a8a3c"
            strokeMiterlimit="10"
            strokeWidth="6px"
            fill="#c4e4cf"
          />
          <path
            d={degree}
            fill="#43bc6f"
            stroke="#0a8a3c"
            strokeMiterlimit="10"
            strokeWidth="6px"
          />
          <path
            d="M120 354V189c0-31-25-50-25-50L84 33H39L28 139S3 158 3 189v165s-2 27 28 27h61c30 0 28-27 28-27Z"
            fill="none"
            stroke="#0a8a3c"
            strokeMiterlimit="10"
            strokeWidth="6px"
          />
          <rect x="31.03" width="61" height="42" rx="5.92" fill="#0b3f23" />
        </g>
      </g>
    </svg>
  );
}
