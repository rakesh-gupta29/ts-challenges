type Action<
  T extends string,
  Acc extends any[]
> = T extends `${infer FirstChar}${infer RestCharacter}`
  ? [FirstChar, ...Acc]
  : never;
type Case = "Sound! Euphonium";

type re1 = Action<Case, []>; //  16
