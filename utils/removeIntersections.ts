// ways to merge a type with multiple intersections into one to provide proper code readibility
type Intersected = { name: string } & { age: number } & { isMarried: boolean };

type MergeIntersections<T> = {
  [key in keyof T]: T[key];
} & {};
type Prettified = MergeIntersections<Intersected>;
