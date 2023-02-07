/*
  119 - ReplaceAll
  -------
  by Anthony Fu (@antfu) #medium #template-literal

  ### Question

  Implement `ReplaceAll<S, From, To>` which replace the all the substring `From` with `To` in the given string `S`

  For example

  ```ts
  type replaced = ReplaceAll<'t y p e s', ' ', ''> // expected to be 'types'
  ```

  > View on GitHub: https://tsch.js.org/119
*/

/* _____________ Your Code Here _____________ */

type ReplaceAll<
  S extends string,
  From extends string,
  To extends string
> = From extends ""
  ? S
  : S extends `${infer Left}${From}${infer Right}`
  ? ReplaceAll<`${Left}${To}${Right}`, From, To>
  : S;
// above code will fail some test cases in the cases.

type Check = ReplaceAll<"foobarfoobar", "ob", "b">;
/* _____________ Test Cases _____________ */
// import type { Equal, Expect } from "@type-challenges/utils";

// type cases = [
//   Expect<Equal<ReplaceAll<"foobar", "bar", "foo">, "foofoo">>,
//   Expect<Equal<ReplaceAll<"foobar", "bag", "foo">, "foobar">>,
//   Expect<Equal<ReplaceAll<"foobarbar", "bar", "foo">, "foofoofoo">>,
//   Expect<Equal<ReplaceAll<"t y p e s", " ", "">, "types">>,
//   Expect<Equal<ReplaceAll<"foobarbar", "", "foo">, "foobarbar">>,
//   Expect<Equal<ReplaceAll<"barfoo", "bar", "foo">, "foofoo">>,
//   Expect<Equal<ReplaceAll<"foobarfoobar", "ob", "b">, "fobarfobar">>,
//   Expect<Equal<ReplaceAll<"foboorfoboar", "bo", "b">, "foborfobar">>,
//   Expect<Equal<ReplaceAll<"", "", "">, "">>
// ];
/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/119/answer
  > View solutions: https://tsch.js.org/119/solutions
  > More Challenges: https://tsch.js.org
*/

// =================================================================================================================

/*
  2757 - PartialByKeys
  -------
  by jiangshan (@jiangshanmeta) #medium #object

  ### Question

  Implement a generic `PartialByKeys<T, K>` which takes two type argument `T` and `K`.

  `K` specify the set of properties of `T` that should set to be optional. When `K` is not provided, it should make all properties optional just like the normal `Partial<T>`.

  For example

  ```typescript
  interface User {
    name: string
    age: number
    address: string
  }

  type UserPartialName = PartialByKeys<User, 'name'> // { name?:string; age:number; address:string }
  ```

  > View on GitHub: https://tsch.js.org/2757
*/

/* _____________ Your Code Here _____________ */

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from "@type-challenges/utils";

interface User {
  name: string;
  age: number;
  address: string;
}

interface UserPartialName {
  name?: string;
  age: number;
  address: string;
}

interface UserPartialNameAndAge {
  name?: string;
  age?: number;
  address: string;
}

type cases = [
  Expect<Equal<PartialByKeys<User, "name">, UserPartialName>>,
  Expect<Equal<PartialByKeys<User, "name" | "age">, UserPartialNameAndAge>>,
  Expect<Equal<PartialByKeys<User>, Partial<User>>>,
  // @ts-expect-error
  Expect<Equal<PartialByKeys<User, "name" | "unknown">, UserPartialName>>
];

/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/2757/answer
  > View solutions: https://tsch.js.org/2757/solutions
  > More Challenges: https://tsch.js.org
*/
