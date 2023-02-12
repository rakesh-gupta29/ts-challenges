type LocationOnMap = {
  "map:latitude": string;
  "map:longitude": string;
};
type RemovePrefix<T> = {
  [key in keyof T as key extends `map:${infer KeyName}`
    ? KeyName
    : key]: T[key];
};

// removed prefix "map" from the type.
type PrettiedLocation = RemovePrefix<LocationOnMap>;
