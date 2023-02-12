/*
  2257 - MinusOne
  -------
  by Mustafo Faiz (@fayzzzm) #medium #math

  ### Question

  Given a number (always positive) as a type. Your type should return the number decreased by one.

  For example:

  ```ts
  type Zero = MinusOne<1> // 0
  type FiftyFour = MinusOne<55> // 54
  ```

  > View on GitHub: https://tsch.js.org/2257
*/

/* _____________ Your Code Here _____________ */

type MinusOne<T extends number> = TupleOfLength<T> extends [
  infer Char,
  ...infer Rest
]
  ? Rest["length"] extends 0
    ? 0
    : Rest["length"]
  : never;

type TupleOfLength<
  T extends number,
  Acc extends any[] = []
> = Acc["length"] extends T ? Acc : TupleOfLength<T, [unknown, ...Acc]>;

type Check = MinusOne<100>;

// this is the final solution. To unsderstand and put the check
// type MinusOne<T extends number, A extends string[] = []> = 0 extends 1
//   ? never
//   : ['', ...A]['length'] extends T
//   ? A['length']
//   : MinusOne<T, ['', ...A]>

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from "@type-challenges/utils";

type cases = [
  Expect<Equal<MinusOne<1>, 0>>,
  Expect<Equal<MinusOne<55>, 54>>,
  Expect<Equal<MinusOne<3>, 2>>,
  Expect<Equal<MinusOne<100>, 99>>,
  Expect<Equal<MinusOne<1101>, 1100>>,
  Expect<Equal<MinusOne<0>, -1>>,
  Expect<Equal<MinusOne<9_007_199_254_740_992>, 9_007_199_254_740_991>>
];

/* _____________ Further Steps _____________ */
/*
    > Share your solutions: https://tsch.js.org/2257/answer
    > View solutions: https://tsch.js.org/2257/solutions
    > More Challenges: https://tsch.js.org
  */
