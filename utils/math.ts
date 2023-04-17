namespace Math {
  type Length<T extends any[]> = T["length"] & number;
  type Push<T extends any[], Val> = [...T, Val];

  type NTuple<
    A extends number,
    Acc extends unknown[] = []
  > = A extends Acc["length"] ? Acc : NTuple<A, [...Acc, unknown]>;

  export type Add<A extends number, B extends number> = A extends number
    ? B extends number
      ? Length<[...NTuple<A>, ...NTuple<B>]>
      : never
    : never;

  export type Minus<A extends number, B extends number> = NTuple<A> extends [
    ...infer U,
    ...NTuple<B>
  ]
    ? Length<U>
    : never;
}

type TestAdd = Math.Add<10, 20>;
type TestMinus = Math.Minus<20, 10>;
type TestDivide = Math.Minus<20, 10>;
