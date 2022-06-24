import * as usersResolver from "../users/users.resolver";

const resolvers = {
  Query: {
    users: usersResolver.getUsers,
  },
  Mutation: {
    userCreate: usersResolver.createUser,
    userUpdate: usersResolver.updateUser,
    userDelete: usersResolver.deleteUser,
  },
};

export default resolvers;
