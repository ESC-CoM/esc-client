import {
  adj_half,
  adj_full,
  e_point,
  h_point,
  f_point,
  half_offset_x,
  full_offset_x,
} from '../components/Join/MoreInfo/Drink/data';

export const adjustDrink = (
  e: React.MouseEvent<HTMLElement>,
  index: number,
  setIsDrinking: React.Dispatch<React.SetStateAction<number[]>>,
  setdrinkDegree: React.Dispatch<React.SetStateAction<string[]>>
) => {
  e.preventDefault();
  const currX = e.nativeEvent.offsetX;

  if (currX <= half_offset_x) {
    setIsDrinking((drinks) =>
      drinks.map((_, idx) => (idx < index ? f_point : e_point))
    );
    setdrinkDegree((degree) =>
      degree.map((_, idx) => {
        if (idx < index) return adj_full;
        else return '';
      })
    );
    return;
  }

  if (currX > half_offset_x && currX <= full_offset_x) {
    setIsDrinking((drinks) =>
      drinks.map((_, idx) => {
        if (idx < index) return f_point;
        if (idx === index) return h_point;
        return e_point;
      })
    );
    setdrinkDegree((degree) =>
      degree.map((_, idx) => {
        if (idx < index) return adj_full;
        if (idx === index) return adj_half;
        return '';
      })
    );
    return;
  }

  if (currX > full_offset_x) {
    setIsDrinking((drinks) =>
      drinks.map((_, idx) => (idx <= index ? f_point : e_point))
    );
    setdrinkDegree((degree) =>
      degree.map((_, idx) => {
        if (idx <= index) return adj_full;
        return '';
      })
    );
    return;
  }
};
