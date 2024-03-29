import Button from '../Button';
import $ from './style.module.scss';

interface Props {
  className?: string;
  inputRef: React.MutableRefObject<HTMLInputElement | null>;
  buttonText: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClick: () => void;
}

export default function ImageUploadButton({
  className,
  inputRef,
  buttonText,
  onChange,
  onClick,
}: Props) {
  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) =>
    onChange(e);

  const handleClickButton = () => onClick();

  return (
    <label htmlFor="input-file" className={className}>
      <input
        className={$['input-file']}
        type="file"
        ref={inputRef}
        onChange={handleChangeInput}
        accept="image/*,.webp,.heif,.heic,.bmp"
        id="input-file"
      />
      <Button width="100px" onClick={handleClickButton}>
        {buttonText}
      </Button>
    </label>
  );
}
