import $ from './style.module.scss';

interface Props {
  src: string;
  alt: string;
  width: number;
  height: number;
  margin: string;
}

export default function SquareImage({
  src,
  alt,
  width,
  height,
  margin,
}: Props) {
  return (
    <div className={$['square-image']} style={{ width, height, margin }}>
      <img src={src} alt={alt + '이미지'} />
    </div>
  );
}
