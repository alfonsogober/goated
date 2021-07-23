export function tail<Input>(arrOrObj: Input[] | Pick<any, "slice">): Input[] {
  return arrOrObj.slice(1);
}
