import { Curried } from "./types";

export function take<Input>(
  index: number,
  arrOrObj?: Input[] | Pick<any, "take">
): Input[] | Curried<Input[] | Pick<any, "take">, Input[]> {
  const innerTake = (arrOrObj) => {
    if (arrOrObj.hasOwnProperty("take"))
      return (arrOrObj as Pick<any, "take">).take(index);
    return (arrOrObj as Input[]).slice(0, index);
  };
  return arrOrObj ? innerTake(arrOrObj) : innerTake;
}
