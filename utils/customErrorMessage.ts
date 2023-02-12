// Throwing custom error messages

type IsPrimitive<T> = T extends any[] ? "Method accepts primitives only." : T;
const deepCompare = <T>(a: IsPrimitive<T>, b: IsPrimitive<T>): boolean => {
  if (Array.isArray(a) || Array.isArray(b)) {
    throw new Error("Method accepts primitives only");
  }
  return a === b;
};
deepCompare(10, 10);
// deepCompare([], []); // type never [] is  not assignable to type boolean.
