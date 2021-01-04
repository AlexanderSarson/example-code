mutation Mutation($deleteUserUserName: String!) {
  deleteUser(userName: $deleteUserUserName) {
    userName
    password
    name
    role
  }
}


query Query {
  users {
    userName
    password
    name
    role
    id
  }
}


mutation Mutation($addUserInput: UserInput!) {
  addUser(input: $addUserInput) {
    userName
    password
    name
    role
  }
}