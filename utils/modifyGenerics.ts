// inherit one generic from another generic type
type ManWithNameAndAge = {
  name: string;
  age: number;
};
type RemoveName<T> = {
  [key in keyof T as key extends "name" ? never : key]: T[key];
};
type WithoutName = RemoveName<ManWithNameAndAge>;
