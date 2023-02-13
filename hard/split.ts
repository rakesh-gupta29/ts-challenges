/*
  2822 - Split
  -------
  by Andrea Simone Costa (@jfet97) #hard #string #split #array #tuple

  ### Question

  The well known `split()` method splits a string into an array of substrings by looking for a separator, and returns the new array. The goal of this challenge is to split a string, by using a separator, but in the type system!

  For example:

  ```ts
  type result = Split<'Hi! How are you?', ' '>  // should be ['Hi!', 'How', 'are', 'you?']
  ```

  > View on GitHub: https://tsch.js.org/2822
*/

/* _____________ Your Code Here _____________ */

type SplitDraft1<
  S extends string,
  Sep extends string
> = S extends `${infer Left}${Sep}${infer Right}`
  ? [Left, ...SplitDraft1<Right, Sep>]
  : [S];
type Check1 = SplitDraft1<"Hi! How are you?", "">;

// edge case : empty string at the end of tuple
type SplitDraft2<
  S extends string,
  Sep extends string
> = S extends `${infer Left}${Sep}${infer Right}`
  ? [Left, ...SplitDraft2<Right, Sep>]
  : S extends ""
  ? []
  : [S];

type Check2 = SplitDraft2<"Hi! How are you?", "">;
type SplitDraft3<
  S extends string,
  Sep extends string
> = S extends `${infer Left}${Sep}${infer Right}`
  ? [Left, ...SplitDraft3<Right, Sep>]
  : S extends ""
  ? Sep extends ""
    ? []
    : [S]
  : [S];

type Check3 = SplitDraft3<"", "something">; // return the tuple as empty string and not an empty tuple
// if both string and seperaor is empty then return an empty tuple.
type SplitDraft4<
  S extends string,
  Sep extends string
> = S extends `${infer Left}${Sep}${infer Right}`
  ? [Left, ...SplitDraft4<Right, Sep>]
  : S extends ""
  ? Sep extends ""
    ? []
    : [S]
  : string extends S
  ? S[]
  : [S];

// final implementation
type Split<
  S extends string,
  Sep extends string
> = S extends `${infer Left}${Sep}${infer Right}`
  ? [Left, ...Split<Right, Sep>]
  : S extends ""
  ? Sep extends ""
    ? []
    : [S]
  : string extends S
  ? S[]
  : [S];

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from "@type-challenges/utils";

type cases = [
  Expect<Equal<Split<"Hi! How are you?", "z">, ["Hi! How are you?"]>>,
  Expect<Equal<Split<"Hi! How are you?", " ">, ["Hi!", "How", "are", "you?"]>>,
  Expect<
    Equal<
      Split<"Hi! How are you?", "">,
      [
        "H",
        "i",
        "!",
        " ",
        "H",
        "o",
        "w",
        " ",
        "a",
        "r",
        "e",
        " ",
        "y",
        "o",
        "u",
        "?"
      ]
    >
  >,
  Expect<Equal<Split<"", "">, []>>,
  Expect<Equal<Split<"", "z">, [""]>>,
  Expect<Equal<Split<string, "whatever">, string[]>>
];

/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/2822/answer
  > View solutions: https://tsch.js.org/2822/solutions
  > More Challenges: https://tsch.js.org
*/
