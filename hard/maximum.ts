/*
  9384 - Maximum
  -------
  by ch3cknull (@ch3cknull) #hard #array

  ### Question

  ### Description
  Implements a type `Maximum`,  get array like type `T`, and return max value in `T`

  `0 <= T[number] < 1000`, so **nagative number not considered**.

  If `T` is a empty array `[]`, just reutrn `never`

  ```ts
  Maximum<[]> // never
  Maximum<[0, 2, 1]> // 2
  Maximum<[1, 20, 200, 150]> // 200
  ```
  ### Advanced
  Can you implement type `Minimum` inspired by `Maximum`?

  > View on GitHub: https://tsch.js.org/9384
*/

/* _____________ Your Code Here _____________ */

type LengthOfTup<T extends any[]> = T["length"] & number;
type NTuple<L, Acc extends unknown[] = []> = LengthOfTup<Acc> extends L
  ? Acc
  : NTuple<L, [...Acc, unknown]>;
type Minus<A extends number, B extends number> = NTuple<A> extends [
  ...infer Amount,
  ...NTuple<B>
]
  ? LengthOfTup<Amount>
  : never;

type Maximum<T extends any[], Acc extends number = 0> = T extends [
  infer F,
  ...infer Rest
]
  ? Minus<Acc, F extends number ? F : never> extends never
    ? Maximum<Rest, F extends number ? F : never>
    : Maximum<Rest, Acc>
  : Acc extends 0
  ? never
  : Acc;

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from "@type-challenges/utils";

type cases = [
  Expect<Equal<Maximum<[]>, never>>,
  Expect<Equal<Maximum<[0, 2, 1]>, 2>>,
  Expect<Equal<Maximum<[1, 20, 200, 150]>, 200>>
];

/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/9384/answer
  > View solutions: https://tsch.js.org/9384/solutions
  > More Challenges: https://tsch.js.org
*/
