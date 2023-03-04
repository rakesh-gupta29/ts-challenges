/*
  114 - CamelCase
  -------
  by Anthony Fu (@antfu) #hard #template-literal

  ### Question

  Implement `CamelCase<T>` which converts `snake_case` string to `camelCase`.

  For example

  ```ts
  type camelCase1 = CamelCase<'hello_world_with_types'> // expected to be 'helloWorldWithTypes'
  type camelCase2 = CamelCase<'HELLO_WORLD_WITH_TYPES'> // expected to be same as previous one
  ```

  > View on GitHub: https://tsch.js.org/114
*/

/* _____________ Your Code Here _____________ */

type IsLetter<T extends string> = Uppercase<T> extends Lowercase<T>
  ? false
  : true;
type CamelCaseGeneric<
  T extends string,
  Acc extends string = "",
  IsPrevLetter extends boolean = true
> = T extends `${infer A}${infer Rest}`
  ? IsPrevLetter extends true
    ? CamelCaseGeneric<Rest, `${Acc}${Lowercase<A>}`, IsLetter<A>>
    : CamelCaseGeneric<
        Rest,
        `${RemoveLastChar<Acc>}${Uppercase<A>}`,
        IsLetter<A>
      >
  : Acc;
type TupleToString<T extends unknown[], Acc extends string = ""> = T extends [
  infer A,
  ...infer Rest
]
  ? TupleToString<Rest, `${Acc}${A extends string ? A : never}`>
  : Acc;

type RemoveLastChar<
  T extends string,
  Acc extends string[] = [],
  Result extends string = ""
> = T extends `${infer A}${infer Rest}`
  ? RemoveLastChar<Rest, [...Acc, A]>
  : Acc extends [...infer All, infer Last]
  ? TupleToString<All>
  : never;
// above method will pass all test cases except the emoji one. Moreover, it can pass the cases where the seperator is not '_' but something else.
type Demo = CamelCaseGeneric<"HELLO%%%%WORLD*(&$*(&WITH_TYPES">; // "helloWorldWithTypes"

type CamelCase<
  S extends string,
  U extends string = "",
  Upper extends boolean = false
> = S extends `${infer L}${infer R}`
  ? L extends "_"
    ? CamelCase<R, U, true>
    : Upper extends true
    ? CamelCase<R, `${U}${Uppercase<L>}`, false>
    : CamelCase<R, `${U}${Lowercase<L>}`, false>
  : U;
/* _____________ Test Cases _____________ */
import type { Equal, Expect } from "@type-challenges/utils";

type cases = [
  Expect<Equal<CamelCase<"foobar">, "foobar">>,
  Expect<Equal<CamelCase<"FOOBAR">, "foobar">>,
  Expect<Equal<CamelCase<"foo_bar">, "fooBar">>,
  Expect<Equal<CamelCase<"foo_bar_hello_world">, "fooBarHelloWorld">>,
  Expect<Equal<CamelCase<"HELLO_WORLD_WITH_TYPES">, "helloWorldWithTypes">>,
  Expect<Equal<CamelCase<"-">, "-">>,
  Expect<Equal<CamelCase<"">, "">>,
  Expect<Equal<CamelCase<"😎">, "😎">>
];

/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/114/answer
  > View solutions: https://tsch.js.org/114/solutions
  > More Challenges: https://tsch.js.org
*/

// =====================================================================================
