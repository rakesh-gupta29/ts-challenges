// force to implement a pattern of listeners over an object
type Listeners<T> = {
  [Key in keyof T as `on${Capitalize<string & Key>}Change`]: (
    latest: T[Key]
  ) => void;
};
function listenToKeyChanges<T>(obj: T, listeners: Listeners<T>) {
  // write some implemetion here
}

// sepcimen use case
type Man = {
  name: string;
  age: number;
};

const man: Man = {
  name: "some name",
  age: 10,
};

listenToKeyChanges(man, {
  onNameChange: (update: string) => {
    console.log("do something with ", update);
  },
  onAgeChange: (update: number) => {
    console.log("do something with", update);
  },
});
