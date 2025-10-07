import { Users } from "../mock-data";

export const listUsers = (limit = 0) => {
  const defaultLimit = limit === 0 ? Users.length : limit;

  return Users.slice(0, defaultLimit);
};

export const getUserById = (userId: string) => {
  const foundUser = Users.find((user) => user.id === userId);

  return foundUser;
};
