const deepEqualComprare = <Arg>(
  a: Arg extends any[] ? "Arary is not a valid arguement" : Arg,
  b: Arg extends any[] ? "Arary is not a valid arguement" : Arg
): boolean => {
  return a === b;
};

deepEqualComprare("a", "b"); // this will work
deepEqualComprare([], []); // error: not acceptable. Demo of using your own error message.
