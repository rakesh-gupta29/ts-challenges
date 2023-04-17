const userName = "user_name"; // inferred as literal
const greetings = ["hello", "hi", "namaste", "hola"]; // inferred as string []

// to convert above to a tuple of fixed length and each element being a literal type, we will have to infer this as consts
// declaring above array as const will declare that this array will not change in runtime.
const readonlyGreetings = ["hello", "hi", "namaste", "hola"] as const;

// if one 'const' is not enough, use two :) 