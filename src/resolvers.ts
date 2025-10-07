import { getUserById, listUsers } from "./lib/users";

export const resolvers = {
  Query: {
    getUser: (_root, { id }) => getUserById(id),
    listUsers: (_root, { limit }) => listUsers(limit),
  },
};
