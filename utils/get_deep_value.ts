const getDeepValue = <
  TObject,
  TFirstKey extends keyof TObject,
  TSecondKey extends keyof TObject[TFirstKey] // can't use keyof TFirstKey as it is property acccess.
>(
  obj: TObject,
  firstKey: TFirstKey,
  secondKey: TSecondKey
) => {
  return obj[firstKey][secondKey];
};

const someObject = {
  name: "some name",
  address: {
    street: "some street",
    lang: {
      first: "first lang",
      second: "second lang",
    },
  },
};

getDeepValue(someObject, "address", "lang");
