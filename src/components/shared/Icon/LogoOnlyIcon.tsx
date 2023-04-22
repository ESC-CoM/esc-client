type Props = {
  width?: number;
  className?: string;
};

export default function LogoOnlyIcon({ width = 50, className }: Props) {
  return (
    <svg
      {...{ width, className }}
      height="100%"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 60 60"
    >
      <g id="그룹_8" data-name="그룹 8" transform="translate(-9006.205 -6330)">
        <path
          id="합치기_1"
          data-name="합치기 1"
          d="M23.662,56.863h0C-4.382,41.579.292,13.925.292,13.925c18.051,7.96,22.393,25.755,23.3,35.758C24.316,37.066,29.229,11.192,54.611,0c0,0,6.2,36.624-30.947,56.862Z"
          transform="translate(9006.205 6330)"
          fill="#ffff"
        />
      </g>
    </svg>
  );
}
