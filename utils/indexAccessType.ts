// leverage index access types
type Colors = {
  primary: "red";
  secondary: "green";
  tertiary: "blue";
};

type ColorsAsUnion = Colors[keyof Colors]; // union of all values
type Greetings = ["hello", "hi", "namaste"];
type GreetingsAsUnion = Greetings[number]; // elements as union
