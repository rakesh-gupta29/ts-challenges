const userName = "user_name"; // inferred as literal
const grettings = ["hello", "hi", "namaste", "hola"]; // inferred as string []

// to convert above to a tuple of ficed length and each element being a literal type, we will have to infer this as consts
const readonlyGreetings = ["hello", "hi", "namaste", "hola"] as const;
