interface User {
    name: string;
    id: number;
    isAdmin: boolean;
  }

  function addUser(user: User): string {
    return user.name + " added successfully";
}

console.log("This is a typescript file!!!");