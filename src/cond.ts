import { Curried } from "./types";

export function cond(pairs: Function[][], ...rest): Curried<any, any> {
  const innerCond = (...rest) => {
    for (let i = 0; i < pairs.length; i++) {
      if (pairs[i][0].apply(pairs[i][0], rest))
        return pairs[i][1].apply(pairs[i][1], rest);
    }
    return undefined;
  };
  return innerCond;
}
