import {
  adj_half,
  adj_full,
  e_point,
  h_point,
  f_point,
  half_offset_x,
  full_offset_x,
  half_offset_y,
  full_offset_y,
} from '../components/Join/MoreInfo/Drink/data';

export const adjustDrink = (
  e: React.MouseEvent<HTMLElement>,
  index: number,
  setDrinkNum: React.Dispatch<React.SetStateAction<number[]>>,
  setdrinkDegree: React.Dispatch<React.SetStateAction<string[]>>
) => {
  e.preventDefault();
  const [currX, currY] = [e.nativeEvent.offsetX, e.nativeEvent.offsetY];

  // full
  if (currX > full_offset_x || currY <= full_offset_y) {
    setDrinkNum((drinks) =>
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
  // empty
  if (currY >= half_offset_y || currX <= half_offset_x) {
    setDrinkNum((drinks) =>
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

  // half
  if (
    (currX > half_offset_x && currX <= full_offset_x) ||
    (currY > full_offset_y && currY < half_offset_y)
  ) {
    setDrinkNum((drinks) =>
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
};
