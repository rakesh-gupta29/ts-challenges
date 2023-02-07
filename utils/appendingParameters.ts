// instead of passing an optional paramters as a object structure,
// passing an undefined paramter is a better option

interface User {
  name: string;
}
function createuser(entry: User) {}
createuser({ name: "dummy name" });

// in case we have to append a field to the existing user model:
interface WrongMethod {
  name: string;
  role?: "admin";
}

interface UserWithRole {
  name: string;
  role: "admin" | undefined;
}
// in this way, we have to be more expicit about which parameter is to be passed bringing code readibility.

function createUserWithRole(user: UserWithRole) {}
createUserWithRole({ name: "some name", role: undefined }); // be explicit about the role.
