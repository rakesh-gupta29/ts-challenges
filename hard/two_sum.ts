/*
  8804 - Two Sum
  -------
  by PsiloLau (@Psilocine) #hard #array #math

  ### Question

  Given an array of integers `nums` and an integer `target`, return true if two numbers such that they add up to `target`.

  > View on GitHub: https://tsch.js.org/8804
*/

/* _____________ Your Code Here _____________ */
namespace Math {
  type TupleOfLength<L, Acc extends 0[] = []> = Acc["length"] extends L
    ? Acc
    : TupleOfLength<L, [...Acc, 0]>;
  export type Amount<A, B> = A extends number
    ? B extends number
      ? [...TupleOfLength<A>, ...TupleOfLength<B>]["length"]
      : never
    : never;
}
type TwoSum<A extends unknown[], Target extends unknown> = A extends [
  infer Elem,
  ...infer Rest
]
  ? Target extends Math.Amount<Elem, Rest[number]>
    ? true
    : TwoSum<Rest, Target>
  : false;

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from "@type-challenges/utils";

type cases = [
  Expect<Equal<TwoSum<[3, 3], 6>, true>>,
  Expect<Equal<TwoSum<[3, 2, 4], 6>, true>>,
  Expect<Equal<TwoSum<[2, 7, 11, 15], 15>, false>>,
  Expect<Equal<TwoSum<[2, 7, 11, 15], 9>, true>>,
  Expect<Equal<TwoSum<[1, 2, 3], 0>, false>>,
  Expect<Equal<TwoSum<[1, 2, 3], 1>, false>>,
  Expect<Equal<TwoSum<[1, 2, 3], 2>, false>>,
  Expect<Equal<TwoSum<[1, 2, 3], 3>, true>>,
  Expect<Equal<TwoSum<[1, 2, 3], 4>, true>>,
  Expect<Equal<TwoSum<[1, 2, 3], 5>, true>>,
  Expect<Equal<TwoSum<[1, 2, 3], 6>, false>>,
  Expect<Equal<TwoSum<[3, 2, 0], 2>, true>>
];

/* _____________ Further Steps _____________ */
/*
    > Share your solutions: https://tsch.js.org/8804/answer
    > View solutions: https://tsch.js.org/8804/solutions
    > More Challenges: https://tsch.js.org
  */
