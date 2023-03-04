type Data = {
  foo: {
    bar: {
      value: "foobar";
      count: 6;
    };
    included: true;
  };
  hello: "world";
};
// challenge is to make it understand the meaning of '.'

type SplitWithDots<
  T extends string,
  Acc extends string[] = []
> = T extends `${infer Left}.${infer Rest}`
  ? SplitWithDots<Rest, [...Acc, Left]>
  : T extends ""
  ? Acc
  : [...Acc, T];

type Get<T, Q extends string> = SplitWithDots<Q> extends [
  infer A,
  ...infer Rest
]
  ? A extends keyof T
    ? T[A]
    : never
  : never;

type Mkmeklfmeklmfekf = Get<Data, "foo.bar.count">; // 6
