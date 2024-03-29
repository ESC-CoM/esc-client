export type Item =
  | {
      text: string;
      type: 'toggle';
      value: boolean;
      onToggleClick: () => void;
    }
  | {
      text: string;
      type: 'link';
      to: string;
    };

export type Menu = {
  title: string;
  items: Item[];
};

export enum BarClassName {
  single = 'single-bar',
  top = 'top-bar',
  middle = 'middle-bar',
  bottom = 'bottom-bar',
}

export type GetBarClassName = (
  index: number,
  totalLength: number
) => BarClassName;
