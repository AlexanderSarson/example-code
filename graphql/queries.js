mutation Mutation($deleteUserUserName: String!) {
  deleteUser(userName: $deleteUserUserName) {
    userName
    password
    name
    role
  }
}

{
  "deleteUserUserName": "alex"
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

{
  "addUserInput": {
    "name": "alex",
    "password": "alex",
    "role": "user",
    "userName": "alex"
  }
}