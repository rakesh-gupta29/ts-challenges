const returnWhatIsPassed = (value: any) => {
  return value;
};
// this does not return the value that is passed but it returns the any type.
// to get the value that is passed, we will have to use generics.

const returnWhatIsPassedWithGenerics = <T>(value: T): T => {
  return value;
};
